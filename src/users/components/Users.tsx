import { FC, useState, useEffect, ChangeEvent } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'app/helpers/appTypes'
import { fetchUsers } from 'users/store/usersThunks'
import {
    selectUserList,
    selectUserPages
} from 'users/store/usersSelectors'

import { Box, Grid, Pagination } from '@mui/material'
import UserItem from 'users/ui/UserItem'

const Users: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const userList = useSelector(selectUserList)
    const totalPages = useSelector(selectUserPages)

    const [page, setPage] = useState<number>(1)
    const handlePagination = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }

    useEffect(() => {
        dispatch(fetchUsers(page))
    }, [dispatch, page])

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '60px'
            }}
        >
            {userList.length > 0 && (
                <>
                    <Grid container spacing={9}>
                        {userList.map(user => (
                            <Grid item xs={3} key={`user-${user.id}`}>
                                <UserItem
                                    firstName={user.first_name}
                                    lastName={user.last_name}
                                    avatar={user.avatar}
                                    id={user.id}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePagination}
                    />
                </>
            )}
        </Box>
    )
}

export default Users