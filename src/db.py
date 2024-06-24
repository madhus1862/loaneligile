from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client.loanApplicationsDB
medical_loan_collection = db.medicalLoans
business_loan_collection = db.businessLoans


def validate_medical_loan_data(data):
    required_fields = [
        "fullName",
        "loanAmount",
        "medicalEmergencyDetails",
        "estimatedMedicalExpenses",
    ]
    for field in required_fields:
        if not data.get(field):
            return False, f"Field {field} is required."
    if data["loanAmount"] <= 0:
        return False, "Loan amount must be greater than zero."
    if data["estimatedMedicalExpenses"] <= 0:
        return False, "Estimated medical expenses must be greater than zero."
    return True, "Validation passed."


def validate_business_loan_data(data):
    required_fields = [
        "fullName",
        "loanAmount",
        "businessName",
        "businessType",
        "businessIncome",
        "businessExpenses",
    ]
    for field in required_fields:
        if not data.get(field):
            return False, f"Field {field} is required."
    if data["loanAmount"] <= 0:
        return False, "Loan amount must be greater than zero."
    if data["businessIncome"] <= 0:
        return False, "Business income must be greater than zero."
    if data["businessExpenses"] < 0:
        return False, "Business expenses cannot be negative."
    return True, "Validation passed."


@app.route("/api/medicalLoanApplications", methods=["POST"])
def create_medical_loan_application():
    data = request.json
    is_valid, message = validate_medical_loan_data(data)
    if is_valid:
        try:
            medical_loan_collection.insert_one(data)
            return jsonify({"message": "Your medical loan application has been submitted successfully."}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
    else:
        return jsonify({"error": message}), 400


@app.route("/api/businessLoanApplications", methods=["POST"])
def create_business_loan_application():
    data = request.json
    is_valid, message = validate_business_loan_data(data)
    if is_valid:
        try:
            business_loan_collection.insert_one(data)
            return jsonify({"message": "Your business loan application has been submitted successfully."}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 400
    else:
        return jsonify({"error": message}), 400


if __name__ == "__main__":
    app.run(port=5000, debug=True)
