import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ButtonLoadingProps {
    enableMessage?: boolean;
}

const ButtonLoading = ({ enableMessage = true }: ButtonLoadingProps) => {
    return (
        <Button disabled className="w-full">
            <Loader2 className="animate-spin" />
            {enableMessage ? "Please wait" : null}
        </Button>
    );
};

export default ButtonLoading;
