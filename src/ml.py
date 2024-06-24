import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Load dataset
data = pd.read_csv('medical_loan_applications.csv')

# Data preprocessing
data = data.drop(columns=['fullName'])

# Convert categorical variable to numerical
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

# Train a logistic regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Model Accuracy: {accuracy * 100:.2f}%")

# Save the model and scaler
joblib.dump(model, 'medical_loan_model.pkl')
joblib.dump(scaler, 'scaler.pkl')
