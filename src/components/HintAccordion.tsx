import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const HintAccordion = ({dataHintApi}:{dataHintApi:any}) => {
    return (
        <>
        <span className="text-sm text-gray-400">
            Hint :</span>
            <Accordion type="single" collapsible className="w-full ">
                {
                    dataHintApi.map((hint: any, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`} className="px-3 bg-slate-950 border-b border-slate-700">
                            <AccordionTrigger>{`Hint ${index + 1}`}</AccordionTrigger>
                            <AccordionContent className="text-sm text-blue-300">
                                {hint.hint}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </>
    );
};

export default HintAccordion;
