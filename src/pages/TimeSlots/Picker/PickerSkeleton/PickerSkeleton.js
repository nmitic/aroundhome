import React, {Fragment} from "react";

import {Styled as PickerStyled} from '../Picker.styled.js';
import {Styled} from './PickerSkeleton.styled';

const PickerSkeleton = () => {

  return (
    <PickerStyled.Container>
      <Styled.Name/>
        <Styled.SelectedSlot/>
        <PickerStyled.Listing>
          <Fragment>
            <Styled.Day/>
            {
              [1,2,3,4,5,6].map(index => <Styled.Item key={index}/>)
            }
            <Styled.Day/>
            {
              [1,2,3,4,5,6].map(index => <Styled.Item key={index}/>)
            }
          </Fragment>
        </PickerStyled.Listing>
    </PickerStyled.Container>
  )
}

export default PickerSkeleton;