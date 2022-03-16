import React, { useCallback, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
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

type Option = {
  label: string;
  id: string;
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

const Form = ({
  users,
  activities,
}: {
  users: Option[];
  activities: Option[];
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const { guild_id } = useParams();
  const [value, setValue] = React.useState(null);
  const [userValue, setUserValue] = React.useState(null);
  const [activityValue, setActivityValue] = React.useState(null);
  const [guildImg, setGuildImg] = useState('');
  useEffect(() => {
    if (!guild_id) {
      return;
    }
    const fetchGuild = async () => {
      const resp = await axios.get(
        `/guild?guild_id=${guild_id}&user_id=${userValue}`,
        {
          baseURL: (VITE_URL || '') as string,
          headers,
        }
      );
      setGuildImg(resp.data.logo[0].url);
    };
    fetchGuild();
  }, [guild_id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = useCallback(
    async (data) => {
      try {
        const resp = await axios.post(
          `/contribution`,
          {
            ActivityType: activityValue,
            Member: [userValue],
            DateOfEngagement: value.format('MM/DD/YYYY'),
            Description: data.description,
          },
          {
            baseURL: (VITE_URL || '') as string,
            headers,
          }
        );
        setValue(null);
        reset();
        enqueueSnackbar('Sucessfully submitted', { variant: 'success' });
      } catch {
        enqueueSnackbar('Failed to submit', { variant: 'error' });
      }
    },
    [activityValue, userValue, value]
  );
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {guildImg && <Logo src={guildImg} />}
      <Autocomplete
        id="user-select"
        options={users}
        sx={{ width: 300 }}
        onChange={(e, v) => setUserValue(v.id)}
        renderInput={(params) => (
          <TextField
            {...params}
            {...(register('user'), { required: true })}
            label="User"
          />
        )}
      />
      {errors.user && <TextField>{errors.user}</TextField>}
      <Autocomplete
        id="activity-select"
        options={activities}
        freeSolo={true}
        sx={{ width: 300 }}
        onChange={(e, v) => setActivityValue(v)}
        renderInput={(params) => (
          <TextField
            {...params}
            {...(register('activity'), { required: true })}
            label="Activity"
          />
        )}
      />
      {errors.activity && <TextField>{errors.activity}</TextField>}
      <TextField
        id="outlined-textarea"
        label="Description"
        multiline
        {...register('description')}
      />
      {errors.description && <TextField>{errors.description}</TextField>}
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
          <TextField {...params} {...(register('date'), { required: true })} />
        )}
      />
      {errors.date && <TextField>{errors.date}</TextField>}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </FormContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const headers = {
  'Content-Type': 'application/json',
};

const Logo = styled.img`
  height: 128px;
  object-fit: contain;
  margin: 2rem;
`;

const VITE_URL = 'http://localhost:3333';
// fetch users
// TODO: fetch logo, users and contributions
export const App = () => {
  const { guild_id } = useParams();
  const [users, setUsers] = useState<{ label: string; id: string }[]>([]);
  const [activities, setActivities] = useState<{ label: string; id: string }[]>(
    []
  );

  useEffect(() => {
    if (!guild_id) {
      return;
    }
    const fetchUsers = async () => {
      const resp = await axios.get(`/users/?guild_id=${guild_id}`, {
        baseURL: (VITE_URL || '') as string,
        headers,
      });
      setUsers([
        ...resp.data.map(
          (user: { display_name?: string; Members: string[] }) => {
            return {
              label: user?.display_name || 'Missing',
              id: user.Members[0],
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
      console.log('Activity Types');
      console.log(resp);
      setActivities([
        ...resp.data.map(
          (user: { activity_name_only?: string; id: string }) => {
            return {
              label: user?.activity_name_only || 'Missing',
              id: user.id,
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
        <Form users={users} activities={activities} />
      </LocalizationProvider>
    </PageContainer>
  );
};

export default App;
