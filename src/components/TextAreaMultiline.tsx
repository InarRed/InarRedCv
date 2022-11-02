import { styled, TextField } from '@mui/material';

export const TextAreaMultiline = styled(TextField)`
  & label.Mui-focused {
    color: gray;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: rgba(128, 128, 128, 0.23);
    }
  }
`;
