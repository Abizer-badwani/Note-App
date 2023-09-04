import { useMutation, useQueryClient } from 'react-query'
import { logoutReq } from './UserReq'
import { toast } from 'react-hot-toast'

export const LogoutUser = () => {
    const queryClient = useQueryClient()
    return useMutation(logoutReq, {
        onSuccess: ({ data }) => {
            if (data?.success) {
                queryClient.invalidateQueries('notes')
                toast.success(data?.message)
            }
            else {
                toast.error(data?.message)
            }
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
}