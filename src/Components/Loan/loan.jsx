import React, { Fragment } from 'react'
import "./loan.css";
import homeimage from "./home1.png";
import travelimage from "./travel.png";
import businessimage from "./business.png";
import educationimage from "./education.png";
import medicalimage from "./medical.png";
import Loan from './Loans/Loan-Card';
function loan() {
  return (
    <div className='container'>

      <div className="loan-cards">
        <Loan link={"form"} image={homeimage} loan={"Home Loan"} description={"Eligible borrowers can avail Home Loan with an attractive interest rate, lower Equated Monthly Instalments (EMIs) and no pre-payment charges on floating Home Loan interest rates.     "} />

        <Loan link={"travelform"} image={travelimage} loan={"Travel Loan"} description={"Travel loans provide financial assistance for individuals to cover expenses related to travel, such as airfare, accommodation, Whether it's for travel loans make journeys more accessible and enjoyable."} />
        <Loan link={"BusinessLoanForm"} image={businessimage} loan={"Business Loan"} description={"A business loan is a financial product designed to provide funds to businesses for various purposes such as expansion, inventory purchase,etc.. It helps businesses access capital to meet their growth needs."} />
        <Loan link={"EducationLoanForm"} image={educationimage} loan={"Education Loan"} description={"Education loans enable students to finance their academic endeavors by covering expenses like tuition fees and living costs. They offer flexible repayment plans and making higher education accessible."} />
        <Loan link={"MedicalLoanForm"} image={medicalimage} loan={"Medical Loan"} description={"A medical loan assists individuals in covering medical expenses such as surgeries, treatments, and hospital stays, providing financial support during times of medical need with convenient repayment terms."} />
      </div>
    </div>

  )
}

export default loan;

