import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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

const Form = ({ users, activites }) => {
  const [value, setValue] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Autocomplete
        id="user-select"
        options={users}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} {...register('user')} label="User" />
        )}
      />
      <Autocomplete
        id="activity-select"
        options={activites}
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

const headers = {
  'Content-Type': 'application/json',
};

const VITE_URL = 'http://localhost:3333';
// fetch users
// TODO: fetch logo, users and contributions
export const App = () => {
  const { guild_id } = useParams();
  const [users, setUsers] = useState<{ label: string; id: string }[]>([]);
  const [activities, setActivities] = useState<{ label: string; id: string }[]>(
    []
  );
  console.log(import.meta.env);

  useEffect(() => {
    if (!guild_id) {
      return;
    }
    const fetchUsers = async () => {
      const resp = await axios.get(`/users/?guild_id=${guild_id}`, {
        baseURL: (VITE_URL || '') as string,
        headers,
      });
      console.log(resp.data);
      setUsers([
        ...resp.data.map(
          (user: { display_name?: string; global_id: string }) => {
            return {
              label: user?.display_name || 'Missing',
              id: user.global_id,
            };
          }
        ),
      ]);
    };
    fetchUsers();
  }, [guild_id]);

  useEffect(() => {
    if (!guild_id) {
      return;
    }
    const fetchActivityTypes = async () => {
      const resp = await axios.get(
        `/contribution/types/?guild_id=${guild_id}`,
        {
          baseURL: (VITE_URL || '') as string,
          headers,
        }
      );
      console.log(resp.data);
      setActivities([
        ...resp.data.map(
          (user: { activity_name_only?: string; Name: string }) => {
            return {
              label: user?.activity_name_only || 'Missing',
              id: user.Name,
            };
          }
        ),
      ]);
    };
    fetchActivityTypes();
  }, [guild_id]);

  return (
    <PageContainer>
      <Typography variant="h2">Add a new Activity</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Form users={users} activites={activities} />
      </LocalizationProvider>
    </PageContainer>
  );
};

export default App;
