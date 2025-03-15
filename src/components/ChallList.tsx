
import Modal from '../components/Modal';
const ChallList = () => {
    return (
        <>
            <Modal>
                <div className="shadow-md shadow-gray-800 flex rounded-sm cursor-pointer h-[150px] justify-between font-semibold flex-col p-4 border border-gray-500">
                    <div>
                        <div className=" line-clamp-2 text-xl leading-5">
                            Web Exploit dwadwad dwadwa dwawad dwdad dwadad
                        </div>
                        <div className="flex items-center gap-1 mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>
                            <div className=" text-lg font-se">145</div>
                            <div className=" px-2 bg-indigo-700">WEB</div>
                        </div>
                    </div>
                    <div>
                        <div className="text-right  text-4xl">100Pts</div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default ChallList;
