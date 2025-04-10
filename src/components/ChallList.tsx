import Modal from '../components/Modal';
const ChallList = ({ dataChallApi }: { dataChallApi: any }) => {
    return (
        <>
            <Modal dataChallApi={dataChallApi}>
                <div className={`shadow-md flex rounded-sm cursor-pointer h-[150px] 
        justify-between font-semibold flex-col p-4 border backdrop-blur-md 
        ${dataChallApi.is_solved
                        ? 'bg-green-950/40 border-green-500 shadow-green-800/50 hover:shadow-green-700/60'
                        : 'bg-gray-900/30 border-gray-500/70 shadow-gray-800/40 hover:shadow-gray-700/60'}`}
                    style={{
                        boxShadow: dataChallApi.is_solved
                            ? '0 8px 32px rgba(0, 128, 0, 0.2)'
                            : '0 8px 32px rgba(30, 41, 59, 0.2)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <div>
                        <div className="line-clamp-2 text-xl leading-5 text-white/90">
                            {dataChallApi.title}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            <div className="text-lg font-se">{dataChallApi.total_solved}</div>
                            <div className="px-2 uppercase rounded-sm"
                                style={{
                                    backgroundColor: `${dataChallApi.category.color}80`,
                                    backdropFilter: 'blur(4px)',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                                }}>{dataChallApi.category.name}</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-right text-4xl text-white/90 font-bold"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{dataChallApi.point}Pts</div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ChallList;
