import "./Loan.css";

const Loan = (props) => {
    return <div className='card'>
        <form action={props.link}>
            <h3 className="loan"> {props.loan} </h3>
            <div className="input-box">
                <img src={props.image} alt="" ></img>
                <p className="desc">{props.description}</p>
            </div>
            <div class="button-loan">
                <button class="submit-btn">Apply Now</button>
            </div>

        </form>
    </div>

}

export default Loan;
