interface DonateProjectFormAmountProps {
    amount: number,
    onClick: (amount: number) => void
}

export default function DonateProjectFormAmount({ amount, onClick }: DonateProjectFormAmountProps) {

    return (
        <div className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-light-background-300 whitespace-nowrap cursor-pointer shadow-md bg-white hover:bg-light-background-200 transition-all" onClick={() => onClick(amount)}>
            <p className="text-md font-semibold text-light-text-100">Rp {amount}</p>
        </div>
    )
}