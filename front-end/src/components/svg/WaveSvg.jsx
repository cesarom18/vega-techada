export const WaveSvg = ({ color = '#374151', bottomPx = 0 }) => {
    return (
        <div
            className='absolute bottom-20 w-full'
            style={{
                bottom: bottomPx
            }}>
            <svg
                className='w-full'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1440 320'>
                <path
                    fill={color}
                    fill-opacity='1'
                    d='M0,256L80,245.3C160,235,320,213,480,213.3C640,213,800,235,960,240C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z' />
            </svg>
        </div>
    );
};