import { FC, ReactNode } from 'react'
import { Paper } from '@mui/material'
import { appTheme } from 'app/themes/appTheme'

interface TransparentPaperProps {
  children: ReactNode
}

const TransparentPaper: FC<TransparentPaperProps> = ({ children }) => {
  return (
    <Paper
      variant='outlined'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        padding: '45px',
        borderRadius: '15px',
        backgroundColor: appTheme.palette.primary.dark
      }}
    >
      {children}
    </Paper>
  )
}

export default TransparentPaper