import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import styled from '@emotion/styled';

const staticUsers = [{ label: 'Keating', id: 1 }];
const staticActivities = [{ label: 'Make pr', id: 1 }];

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Form = () => {
  const [value, setValue] = React.useState(null);
  const [users, setUsers] = useState(staticUsers);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Autocomplete
        id="user-select"
        options={staticUsers}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} {...register('user')} label="User" />
        )}
      />
      <Autocomplete
        id="activity-select"
        options={staticActivities}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} {...register('activity')} label="Activity" />
        )}
      />
      <TextField
        id="outlined-textarea"
        label="Description"
        multiline
        {...register('description')}
      />
      <DatePicker
        disableFuture
        label="Date Completed"
        openTo="year"
        views={['year', 'month', 'day']}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} {...register('date')} />
        )}
      />
      <Button type="submit" variant="contained">
        Contained
      </Button>
    </FormContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`;

// fetch users
// TODO: fetch logo, users and contributions
export const App = () => {
  return (
    <PageContainer>
      <Typography variant="h2">Add a new Activity</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form />
      </LocalizationProvider>
    </PageContainer>
  );
};

export default App;
