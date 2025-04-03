import { useParams, useSearchParams, Link } from "react-router";
import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";
import { getVerifyEmail } from "@/api/AuthApi";

const VerifyEmail = () => {
    // url : http://localhost:5173/api/email/verify/14/4265ac63b5d05ed8e962c27f34c57630151e9f55?expires=1743647937&signature=9a9f5dffc9b3c36bb68bf6080aaf8b241e47be3161fc6a56ade5cc561079caa3
    const { id, token } = useParams();
    const [searchParams] = useSearchParams();

    const expires = searchParams.get("expires");
    const signature = searchParams.get("signature");

    if (!id || !token || !expires || !signature) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-white">
                <h1 className="text-2xl font-bold mb-4">Invalid URL</h1>
                <p>Please check the verification link and try again.</p>
            </div>
        );
    }

    // get all url except hostname and pathname
    const urlforApi = `${import.meta.env.VITE_API_HOST_URL}/api/email/verify/${id}/${token}?expires=${expires}&signature=${signature}`;

    const { data, isLoading, error } = useQuery({
        queryKey: ['myDataVerifyEmail'],
        queryFn: () => getVerifyEmail(urlforApi)
    });

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    return (
        <div className="h-full flex items-center justify-center p-4">
            <div className={` border 
                ${error ? "border-red-800" : "border-green-800"}
                ${isLoading ? "border-blue-800" : ""}
                rounded-lg shadow-2xl p-8 max-w-md w-full`}>

                {isLoading ? (
                    <div className="flex flex-col items-center py-8">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                        <p className="text-gray-300 text-lg">Verifying your email...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-6 px-4">
                        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-red-900/20 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-red-400 mb-4">Verification Failed</h2>
                        <p className="text-gray-300 mb-6  ">
                            {(error as any)?.response?.status === 400
                                ? "Your email has already been verified."
                                : (error as any)?.response?.data?.message || "Unable to verify your email. The link might be expired or invalid."}
                        </p>
                        <Link to="/login" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Back to Login
                        </Link>
                    </div>
                ) : (
                    <div className="text-center py-6 px-4">
                        <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-green-900/20 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-green-400 mb-4">Email Verified!</h2>
                        <p className="text-gray-300 mb-6">{data?.message || "Your email has been successfully verified."}</p>
                        <Link to="/login" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                            Continue to Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
};

export default VerifyEmail;
