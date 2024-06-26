import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib
import os

# Function to load synthetic dataset and train the model
def train_and_evaluate_model(data_path, loan_type):
    try:
        # Load the dataset
        data = pd.read_csv(data_path)

        # Data preprocessing
        data = data.drop(columns=['fullName'])  # Assuming 'fullName' isn't needed for prediction
        
        # Convert categorical variable to numerical (if 'gender' column exists)
        if 'gender' in data.columns:
            data['gender'] = data['gender'].map({'male': 0, 'female': 1, 'other': 2})

        # Define features and target
        X = data.drop(columns=['loanApproved'])
        y = data['loanApproved']

        # Split the dataset
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Standardize the features
        scaler = StandardScaler()
        X_train = scaler.fit_transform(X_train)
        X_test = scaler.transform(X_test)

        # Train a Random Forest model with hyperparameter tuning
        param_grid = {
            'n_estimators': [100, 200, 300],
            'max_depth': [None, 10, 20, 30],
            'min_samples_split': [2, 5, 10],
            'min_samples_leaf': [1, 2, 4],
            'bootstrap': [True, False]
        }

        rf = RandomForestClassifier(random_state=42)
        grid_search = GridSearchCV(estimator=rf, param_grid=param_grid, cv=3, n_jobs=-1, verbose=2)
        grid_search.fit(X_train, y_train)

        # Get the best model
        best_rf = grid_search.best_estimator_

        # Make predictions
        y_pred = best_rf.predict(X_test)
        accuracy = accuracy_score(y_test, y_pred)
        print(f"Model Accuracy: {accuracy * 100:.2f}%")

        # Save the model and scaler
        model_dir = 'models'
        os.makedirs(model_dir, exist_ok=True)
        model_path = os.path.join(model_dir, f'best_{loan_type}_loan_model.pkl')
        scaler_path = os.path.join(model_dir, f'best_{loan_type}_scaler.pkl')

        joblib.dump(best_rf, model_path)
        joblib.dump(scaler, scaler_path)

        print(f"Model and scaler saved to {model_path} and {scaler_path}")

    except Exception as e:
        print(f"Error occurred: {str(e)}")

# Example usage to train and save models for each loan type
if __name__ == "__main__":
    # Train and save model for medical loans
    train_and_evaluate_model('synthetic_medical_loan_applications.csv', 'medical')

    # Train and save model for business loans
    train_and_evaluate_model('synthetic_business_loan_applications.csv', 'business')

    # Train and save model for travel loans
    train_and_evaluate_model('synthetic_travel_loan_applications.csv', 'travel')
