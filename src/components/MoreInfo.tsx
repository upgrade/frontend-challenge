import React, { memo, useCallback, useEffect, useState } from 'react';
import { Button, Checkbox } from 'antd';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { updateMoreInfo, updateCachedState } from '../redux/store';
import { getColors } from '../redux/api';

const MoreInfo = memo(() => {
    const moreInfo = useSelector(state => state.moreInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedColor, setSelectedColor] = useState('');
    const [termsChecked, setTermsChecked] = useState(false);

    useEffect(() => {
      const fetchColors = async () => {
        setIsLoading(true);
        const colors = await getColors();
        const updatedColors = colors?.data.map((color) => {
          return { value: color, label: color }
        });
        await setColors(updatedColors);
        setIsLoading(false);
      }
      if (colors.length <= 0) {
        fetchColors();
      }
    }, [colors, setColors]);

    useEffect(() => {
        setSelectedColor(moreInfo?.color);
        setTermsChecked(moreInfo?.terms);
    }, [setSelectedColor, setTermsChecked, moreInfo])

    const onSubmit = useCallback(
        async (selectedColor, termsChecked) => {
            dispatch(updateMoreInfo({color: selectedColor, terms: termsChecked}));
            updateCachedState({moreInfo: {color: selectedColor, terms: termsChecked}});
            navigate(`/confirmation`);
        },
        []
    );

  return (
    <>
      {isLoading ? <ClipLoader color="#000"/> :
      <>
          <h1 style={{marginBottom: '2rem'}}>More Info</h1>
          <div style={{marginBottom: '1rem'}}>
              {selectedColor?.value}
              <Select
                style={{width: '10rem'}}
                onChange={(e) => setSelectedColor(e.value)}
                value={{label: selectedColor ? selectedColor : 'Select a color'}}
                options={colors}>
              </Select>
          </div>
          <div style={{marginBottom: '1rem'}}>
              <Checkbox checked={termsChecked} onChange={(e) => setTermsChecked(e.target.checked)}>I agree to the terms and conditions</Checkbox>
          </div>
          <div>
              <Button style={{marginRight: '1rem'}} type="primary" onClick={() => navigate(`/`)}>
                  Back
              </Button>
              <Button type="primary" onClick={() => onSubmit(selectedColor, termsChecked)}>
                  Next
              </Button>
          </div>
      </>}
    </>
  );
});

export default MoreInfo;
