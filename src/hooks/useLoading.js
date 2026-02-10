import { PuffLoader } from 'react-spinners'

export const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '50vh'
        }}>
            <PuffLoader
                color="#e50914"
                loading={true}
                size={70}
                speedMultiplier={1}
            />
        </div>
    )
}
