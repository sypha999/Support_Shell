import React from 'react';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { date } from 'yup';
import Button from '../../components/common/Button';
import File from '../../components/common/File';
import Input from '../../components/common/Input';
import SelectItems from '../../components/common/SelectItems';
import UserCreated from '../../components/modal/UserCreated';
import {
  AuthFormArea,
  BackButton,
  Heading,
  Container,
  InputWidth,
  MarginStyle,
  Paragraph,
  Div,
  DropdownMenuItem,
} from '../../utils/common';
import TempFile from './TrustGroup/TempFile';

function CreateUser() {
  const [userData, setUserData] = useState({
    fullName: '',
    dateOfBirth: new Date(),
    address: '',
    email: '',
    phoneNumber: '',
    letterOfApproval: '',
    signedTermsAndCondition: '',
    loanStructure: '',
    trustGroup: 'Select a trust group',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    email: '',
    phoneNumber: '',
    letterOfApproval: '',
    signedTermsAndCondition: '',
    loanStructure: '',
    trustGroup: '',
  });
  
  const [isValid, setIsValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    fullName,
    dateOfBirth,
    address,
    email,
    phoneNumber,
    letterOfApproval,
    signedTermsAndCondition,
    loanStructure,
    trustGroup,
  } = userData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateFullName = () => {
    if (
      !new RegExp(
        /^([A-Za-z]{3,16})([ ]{1})([A-Za-z]{3,16})?([ ]{1})?([A-Za-z]{3,16})$/
      ).test(fullName)
    ) {
      setErrors((prevState) => ({
        ...prevState,
        fullName: 'Enter a valid fullname',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        fullName: '',
      }));
      return true;
    }
  };

  const validateDateOfBirth = () => {
    const currentDate = new Date().getFullYear();
    if (currentDate - dateOfBirth.getFullYear() !== 18){
      setErrors((prevState) => ({
        ...prevState,
        dateOfBirth: 'Invalid date of birth!',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        dateOfBirth: '',
      }));
      return true;
    }
  };

  const validateEmail = () => {
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(email)
    ) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'Enter a valid email',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: '',
      }));
      return true;
    }
  };

  const validateAddress = () => {
    if (address.length <= 8) {
      setErrors((prevState) => ({
        ...prevState,
        address: 'Enter a valid address',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        address: '',
      }));
      return true;
    }
  };

  const validatePhoneNumber = () => {
    if (!new RegExp(/^(^\+234)\d{10}$/).test(phoneNumber)) {
      setErrors((prevState) => ({
        ...prevState,
        phoneNumber: 'Enter a valid phone',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phoneNumber: '',
      }));
      return true;
    }
  };

  const validateLoanStructure = () => {
    if (!loanStructure.length) {
      setErrors((prevState) => ({
        ...prevState,
        loanStructure: 'Select a file',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        loanStructure: '',
      }));
      return true;
    }
  };

  const validateApprovalLetter = () => {
    if (!letterOfApproval.length) {
      setErrors((prevState) => ({
        ...prevState,
        letterOfApproval: 'Select a file',
      }));
      return false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        letterOfApproval: '',
      }));
      return true;
    }
  };
  
   const validateSignedContract = () => {
     if (!signedTermsAndCondition.length) {
       setErrors((prevState) => ({
         ...prevState,
         signedTermsAndCondition: 'Select a file',
       }));
       return false;
     } else {
       setErrors((prevState) => ({
         ...prevState,
         signedTermsAndCondition: '',
       }));
       return true;
     }
   };

  const validateInput = () => {
    // eslint-disable-next-line no-unused-expressions
    if(!validateFullName() && !validateDateOfBirth() 
    &&!validateAddress() &&!validateEmail() 
    && !validatePhoneNumber() && !validateLoanStructure() 
    &&!validateApprovalLetter() && !validateSignedContract()){
      setIsValid(false)
    }else{
      setIsValid(true);
    }
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateInput()) {
      let userData = {
        fullName: '',
        dateOfBirth: date,
        address: '',
        email: '',
        phoneNumber: '',
        letterOfApproval: [],
        signedTermsAndCondition: [],
        loanStructure: [],
        trustGroups: {},
      };
      setUserData(userData);
      setShowSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } //else {
    //   // make API call
    // }
  };

  if (showSuccess) {
    return <UserCreated />;
  }
  return (
    <div style={{ height: '100vh' }}>
      <Container>
        <Div>
          <Heading
            style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold' }}
          >
            Create a user account
          </Heading>
          <Paragraph>
            Fill out the form below with correct details as specified
          </Paragraph>
        </Div>
        <Div>
          <Link to="/registered-members" style={{ textDecoration: 'none' }}>
            <BackButton>View all members</BackButton>
          </Link>
        </Div>
      </Container>
      <AuthFormArea style={{ width: '100%' }}>
        <form>
          <Container>
            <InputWidth>
              <Input
                autoComplete="off"
                type="text"
                label="Full Name"
                name="fullName"
                value={fullName}
                onChange={changeHandler}
                onBlur={validateFullName}
                errorMessage={errors.fullName}
              />
            </InputWidth>
            <InputWidth>
              <Input
                autoComplete="off"
                type="date"
                label="Date of Birth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={changeHandler}
                onBlur={validateDateOfBirth}
                errorMessage={errors.dateOfBirth}
              />
            </InputWidth>
          </Container>
          <Container>
            <InputWidth>
              <Input
                autoComplete="off"
                type="text"
                label="Address"
                name="address"
                value={address}
                onChange={changeHandler}
                onBlur={validateAddress}
                errorMessage={errors.address}
              />
            </InputWidth>
            <InputWidth>
              <Input
                autoComplete="off"
                type="email"
                label="Email"
                name="email"
                value={email}
                onChange={changeHandler}
                onBlur={validateEmail}
                errorMessage={errors.email}
              />
            </InputWidth>
          </Container>
          <Container>
            <InputWidth>
              <File
                label="Letter of Approval"
                name="letterOfApproval"
                value={letterOfApproval}
                onChange={changeHandler}
                onBlur={validateApprovalLetter}
                errorMessage={errors.letterOfApproval}
              />
            </InputWidth>
            <InputWidth>
              <Input
                type="tel"
                label="Phone Number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={changeHandler}
                onBlur={validatePhoneNumber}
                errorMessage={errors.phoneNumber}
              />
            </InputWidth>
          </Container>
          <Container>
            <InputWidth>
              <File
                label="Signed terms and Conditions document"
                name="termsAndConditions"
                value={signedTermsAndCondition}
                onChange={changeHandler}
                onBlur={validateSignedContract}
                errorMessage={errors.signedTermsAndCondition}
              />
            </InputWidth>
            <InputWidth>
              <File
                label="Loan Structure/Rental"
                name="loanStructure"
                value={loanStructure}
                onChange={changeHandler}
                onBlur={validateLoanStructure}
                errorMessage={errors.loanStructure}
              />
            </InputWidth>
          </Container>
          <InputWidth>
            <InputWidth style={{ paddingTop: '10px', paddingDown: '15px' }}>
              <label for="cars">Trust Groups</label>
            </InputWidth>
            <select
              class="form-select"
              style={{
                height: '50px',
                marginTop: '10px',
                textDecoration: 'none',
              }}
            >
              <option>Select </option>
              <option>
                All about technical skills
              </option>
            </select>
          </InputWidth>
          <MarginStyle>
            <Button type="submit" children="Submit" onClick={submitHandler} />
          </MarginStyle>
        </form>
      </AuthFormArea>
    </div>
  );
}
export default CreateUser;
