from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# MongoDB client setup
client = MongoClient("mongodb://localhost:27017/")
db = client.loanApplicationsDB
loan_applications_collection = db.loanApplications

# Validation functions
def validate_medical_form_data(data):
    required_fields = [
        "fullName", "loanAmount", "medicalEmergencyDetails", "estimatedMedicalExpenses",
        "age", "gender", "netMonthlyIncome", "creditScore", "hasMedicalDocuments"
    ]
    for field in required_fields:
        if field not in data:
            return False, f"Missing field: {field}"
    return True, ""

def validate_business_form_data(data):
    required_fields = [
        "fullName", "loanAmount", "businessDetails", "businessPlan",
        "age", "gender", "netMonthlyIncome", "creditScore", "hasBusinessPlan"
    ]
    for field in required_fields:
        if field not in data:
            return False, f"Missing field: {field}"
    return True, ""

def validate_travel_form_data(data):
    required_fields = [
        "fullName", "loanAmount", "travelDestination", "travelDates",
        "age", "gender", "netMonthlyIncome", "creditScore", "hasTravelDocuments"
    ]
    for field in required_fields:
        if field not in data:
            return False, f"Missing field: {field}"
    return True, ""

def validate_education_form_data(data):
    required_fields = [
        "studentName", "guardianName", "studentDOB", "gender", "guardianContactNumber", "email",
        "address", "city", "state", "pin", "educationalInstitution", "courseDetails", "courseFee",
        "loanAmount", "academicRecords", "admissionDocuments", "hasIdentityProof", "hasAddressProof",
        "hasBankStatement", "hasMarksheets", "declaration"
    ]
    for field in required_fields:
        if field not in data:
            return False, f"Missing field: {field}"
    return True, ""

# Routes for handling loan applications
@app.route('/apply/medical-loan', methods=['POST'])
def apply_medical_loan():
    data = request.get_json()
    is_valid, message = validate_medical_form_data(data)
    if not is_valid:
        return jsonify({"error": message}), 400
    
    loan_applications_collection.insert_one({
        "type": "medical",
        "data": data
    })
    
    return jsonify({"message": "Medical loan application submitted successfully."})

@app.route('/apply/business-loan', methods=['POST'])
def apply_business_loan():
    data = request.get_json()
    is_valid, message = validate_business_form_data(data)
    if not is_valid:
        return jsonify({"error": message}), 400
    
    loan_applications_collection.insert_one({
        "type": "business",
        "data": data
    })
    
    return jsonify({"message": "Business loan application submitted successfully."})

@app.route('/apply/travel-loan', methods=['POST'])
def apply_travel_loan():
    data = request.get_json()
    is_valid, message = validate_travel_form_data(data)
    if not is_valid:
        return jsonify({"error": message}), 400
    
    loan_applications_collection.insert_one({
        "type": "travel",
        "data": data
    })
    
    return jsonify({"message": "Travel loan application submitted successfully."})

@app.route('/apply/education-loan', methods=['POST'])
def apply_education_loan():
    data = request.get_json()
    is_valid, message = validate_education_form_data(data)
    if not is_valid:
        return jsonify({"error": message}), 400
    
    loan_applications_collection.insert_one({
        "type": "education",
        "data": data
    })
    
    return jsonify({"message": "Education loan application submitted successfully."})

if __name__ == '__main__':
    app.run(debug=True)
