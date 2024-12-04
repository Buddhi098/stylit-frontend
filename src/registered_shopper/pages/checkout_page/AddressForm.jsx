import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
import { set } from 'lodash';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddressForm({setFormValues}) {
  const [formValuess, setFormValuess] = React.useState({});
  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValuess((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  React.useEffect(() => {
    console.log(formValuess)
    setFormValues(formValuess)
  }, [formValuess])

  return (
    <Grid container spacing={3}>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="first-name" required>
          First name
        </FormLabel>
        <OutlinedInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="John"
          autoComplete="first name"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="lastName" required>
          Last name
        </FormLabel>
        <OutlinedInput
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Snow"
          autoComplete="last name"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address1" required>
          Address line 1
        </FormLabel>
        <OutlinedInput
          id="addressLine1"
          name="addressLine1"
          type="text"
          placeholder="Street name and number"
          autoComplete="shipping address-line1"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormLabel htmlFor="address2">Address line 2</FormLabel>
        <OutlinedInput
          id="addressLine2"
          name="addressLine2"
          type="text"
          placeholder="Apartment, suite, unit, etc. (optional)"
          autoComplete="shipping address-line2"
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="city" required>
          City
        </FormLabel>
        <OutlinedInput
          id="city"
          name="city"
          type="text"
          placeholder="New York"
          autoComplete="City"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="state" required>
          Province
        </FormLabel>
        <OutlinedInput
          id="province"
          name="province"
          type="text"
          placeholder="NY"
          autoComplete="State"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="zip" required>
          Zip / Postal code
        </FormLabel>
        <OutlinedInput
          id="zipCode"
          name="zipCode"
          type="text"
          placeholder="12345"
          autoComplete="shipping postal-code"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={6}>
        <FormLabel htmlFor="country" required>
          Country
        </FormLabel>
        <OutlinedInput
          id="country"
          name="country"
          type="text"
          placeholder="United States"
          autoComplete="shipping country"
          required
          onChange={handleChange}
        />
      </FormGrid>
      <FormGrid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="saveAddress" value="yes" onChange={handleChange} />}
          label="Use this address for payment details"
        />
      </FormGrid>
    </Grid>
  );
}
