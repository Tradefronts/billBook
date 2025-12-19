"use client"
import { useSearchParams } from "next/navigation";

type Props = {
    searchParams: {
        voucher_type?: string;
    };
};

const VOUCHER_TITLES: Record<string, string> = {
    sales_invoice: "Sales Invoice",
    quotation: "Quotation / Estimate",
    payment_in: "Payment In",
    sales_return: "Sales Return",
    credit_note: "Credit Note",
    delivery_challan: "Delivery Challan",
    proforma: "Proforma Invoice",
};

export default function VouchersPage() {
    const searchParams = useSearchParams()
    const voucher_type = searchParams.get('voucher_type')


         return <>voucher_type: {voucher_type}</>

    
}
