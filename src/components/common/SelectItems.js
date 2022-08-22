// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import {
//   Div,
//   DropdownCaret,
//   DropdownMenuItem,
//   DropdownPlaceHolder,
//   DropDownMenu
// } from '../../utils/common';
// import { useState } from 'react';
// import { FaAngleDown, FaAngleRight, FaAngleUp } from 'react-icons/fa';

// const InputArea = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Select = styled.input`
//   align-items: center;
//   height: 40px;
//   width: 100%;
//   background: transparent;
//   border: #ffffff;
//   border-radius: 4px;
//   color: #979797;
//   padding: 13px 13px;
//   font-size: 16px; 
// `;

// const Label = styled.p`
//   font-family: Mulish;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 16px;
//   margin-bottom: 10px;
//   color: #21334f;
// `;

// const FormGroup = styled.div`
//   position: relative;
// `;

// const ErrorText = styled.p`
//   font-family: Mulish;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 14px;
//   color: #de1e1e;
//   margin-bottom: 0;
//   margin-top: 10px;
// `;

// export default function SelectItems({
//   trustGroups,
//   onSelect,
//   label,
//   onChange,
//   value,
//   name,
//   style,
//   className,
//   error,
//   errorMessage,
//   onBlur,
// }) {
//   const [toggleDropdown, setToggleDropdown] = useState(false);
//   const [selected, setSelected] = useState(value);
//   const [isPicked, setIsPicked] = useState(false);
//   const pick = () => {
//     setIsPicked(true);
//     setSelected(tempValue);
//   };

//   const toggle = () => {
//     setToggleDropdown(!toggleDropdown);
//   };
//   // const options = trustGroups.map((trustGroup) => (
//   //   <DropdownMenuItem key={trustGroup.id}>
//   //     {trustGroup.name}
//   //     <FaAngleRight style={{ padding: '3px', height: 'inherit' }} />
//   //   </DropdownMenuItem>
//   // ));

//   const DropdownArea = styled.div`
//     display: ${toggleDropdown ? 'block' : 'none'};
//     position: absolute;
//     background-color: #ffffff;
//     box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.1);
//     y-index: 1;
//     border-radius: 6px;
//     padding: 26px;
//     left: 0;
//     width: 80%;
//   `;

//   let tempValue = 'All about technical skill ';
//   return (
//     <Div>
//       <InputArea>
//         <Label>{label}</Label>
//         <FormGroup>
//           <DropDownMenu onClick={() => toggle()}>
//             <DropdownPlaceHolder>
//               <Select
//                 value={selected}
//                 onChange={(e) => onChange(e)}
//                 name={name}
//                 style={style}
//                 onBlur={onBlur}
//               />
//               <DropdownCaret
//                 style={{
//                   paddingRight: '25px',
//                   color: '#979797',
//                 }}
//               >
//                 {toggleDropdown ? <FaAngleUp /> : <FaAngleDown />}
//               </DropdownCaret>
//             </DropdownPlaceHolder>
//             <DropdownArea>
//               <DropdownMenuItem>
//                 {/*options*/}
//                 <DropdownMenuItem>
//                   {tempValue}
//                 </DropdownMenuItem>
//                 <DropdownMenuItem href="/admin/trust-group/:id">
//                   <FaAngleRight style={{ padding: '3px', height: 'inherit' }} />
//                 </DropdownMenuItem>
//               </DropdownMenuItem>
//             </DropdownArea>
//           </DropDownMenu>
//         </FormGroup>
//         {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
//       </InputArea>
//     </Div>
//   );
// }

// SelectItems.propTypes = {
//   label: PropTypes.string,
//   onChange: PropTypes.func,
//   onSelect: PropTypes.func,
//   value: PropTypes.any,
//   name: PropTypes.string,
//   style: PropTypes.object,
//   errorMessage: PropTypes.string,
// };

// SelectItems.defaultProps = {
//   type: 'select',
// };
