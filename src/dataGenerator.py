import pandas as pd
from faker import Faker
import random
import datetime

fake = Faker()

# Generate synthetic medical loan applications data
def generate_medical_loan_data(num_samples):
    data = []
    for _ in range(num_samples):
        data.append({
            'fullName': fake.name(),
            'gender': random.choice(['male', 'female', 'other']),
            'dob': fake.date_of_birth(minimum_age=18, maximum_age=70).strftime('%Y-%m-%d'),
            'age': fake.random_int(min=18, max=70),
            'contactNumber': fake.phone_number(),
            'email': fake.email(),
            'address': fake.street_address(),
            'city': fake.city(),
            'state': fake.state(),
            'pin': fake.zipcode(),
            'employmentType': random.choice(['self-employed', 'salaried', 'business owner']),
            'employerName': fake.company(),
            'netMonthlyIncome': random.uniform(2000, 20000),
            'loanType': 'medical',
            'loanAmount': random.uniform(5000, 50000),
            'loanTenure': random.randint(6, 24),
            'hasIdentityProof': random.choice([True, False]),
            'hasAddressProof': random.choice([True, False]),
            'hasBankStatement': random.choice([True, False]),
            'hasSalaryProof': random.choice([True, False]),
            'declaration': True,
            'medicalEmergencyDetails': fake.sentence(nb_words=6),
            'estimatedMedicalExpenses': random.uniform(1000, 20000),
            'hasMedicalDocuments': random.choice([True, False]),
            'loanApproved': random.choice([True, False])  # Add loanApproved column
        })
    return pd.DataFrame(data)

# Generate synthetic business loan applications data
def generate_business_loan_data(num_samples):
    data = []
    for _ in range(num_samples):
        data.append({
            'fullName': fake.name(),
            'gender': random.choice(['male', 'female', 'other']),
            'dob': fake.date_of_birth(minimum_age=18, maximum_age=70).strftime('%Y-%m-%d'),
            'age': fake.random_int(min=18, max=70),
            'contactNumber': fake.phone_number(),
            'email': fake.email(),
            'address': fake.street_address(),
            'city': fake.city(),
            'state': fake.state(),
            'pin': fake.zipcode(),
            'employmentType': random.choice(['self-employed', 'salaried', 'business owner']),
            'employerName': fake.company(),
            'netMonthlyIncome': random.uniform(2000, 50000),
            'loanType': 'business',
            'loanAmount': random.uniform(10000, 100000),
            'loanTenure': random.randint(12, 36),
            'hasIdentityProof': random.choice([True, False]),
            'hasAddressProof': random.choice([True, False]),
            'hasBankStatement': random.choice([True, False]),
            'hasSalaryProof': random.choice([True, False]),
            'declaration': True,
            'businessName': fake.company(),
            'businessType': random.choice(['sole proprietorship', 'partnership', 'corporation']),
            'businessRegistrationNumber': fake.uuid4(),
            'businessStartDate': fake.date_this_century(before_today=True, after_today=False).strftime('%Y-%m-%d'),
            'businessIncome': random.uniform(5000, 50000),
            'businessExpenses': random.uniform(2000, 20000),
            'businessAssets': random.uniform(10000, 50000),
            'businessLiabilities': random.uniform(1000, 10000),
            'loanApproved': random.choice([True, False])  # Add loanApproved column
        })
    return pd.DataFrame(data)

# Generate synthetic travel loan applications data
def generate_travel_loan_data(num_samples):
    data = []
    for _ in range(num_samples):
        data.append({
            'fullName': fake.name(),
            'gender': random.choice(['male', 'female', 'other']),
            'dob': fake.date_of_birth(minimum_age=18, maximum_age=70).strftime('%Y-%m-%d'),
            'age': fake.random_int(min=18, max=70),
            'contactNumber': fake.phone_number(),
            'email': fake.email(),
            'address': fake.street_address(),
            'city': fake.city(),
            'state': fake.state(),
            'pin': fake.zipcode(),
            'employmentType': random.choice(['self-employed', 'salaried', 'business owner']),
            'employerName': fake.company(),
            'netMonthlyIncome': random.uniform(2000, 50000),
            'loanType': 'travel',
            'loanAmount': random.uniform(2000, 20000),
            'loanTenure': random.randint(3, 12),
            'hasIdentityProof': random.choice([True, False]),
            'hasAddressProof': random.choice([True, False]),
            'hasBankStatement': random.choice([True, False]),
            'hasSalaryProof': random.choice([True, False]),
            'declaration': True,
            'travelDestination': fake.country(),
            'travelPurpose': random.choice(['vacation', 'business trip', 'medical tourism']),
            'travelCost': random.uniform(1000, 10000),
            'departureDate': fake.date_between(start_date='-30d', end_date='+30d').strftime('%Y-%m-%d'),
            'returnDate': (datetime.datetime.strptime(fake.date_between(start_date='+31d', end_date='+90d').strftime('%Y-%m-%d'), '%Y-%m-%d') + datetime.timedelta(days=random.randint(3, 14))).strftime('%Y-%m-%d'),
            'loanApproved': random.choice([True, False])  # Add loanApproved column
        })
    return pd.DataFrame(data)

# Example usage to generate and save synthetic datasets
if __name__ == "__main__":
    num_samples = 1000  # Number of samples to generate for each loan type
    
    # Generate and save synthetic medical loan applications data
    medical_data = generate_medical_loan_data(num_samples)
    medical_data.to_csv('synthetic_medical_loan_applications.csv', index=False)
    
    # Generate and save synthetic business loan applications data
    business_data = generate_business_loan_data(num_samples)
    business_data.to_csv('synthetic_business_loan_applications.csv', index=False)
    
    # Generate and save synthetic travel loan applications data
    travel_data = generate_travel_loan_data(num_samples)
    travel_data.to_csv('synthetic_travel_loan_applications.csv', index=False)
