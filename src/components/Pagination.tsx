'use client'
import { TDirection } from "../../types";
import { useRouter, usePathname } from 'next/navigation';
import qs from 'qs';

interface IPropType {
    page: number,
    pageCount: number,
    redirectUrl?: string

}

const Pagination = ({ page, pageCount, redirectUrl = '/' }: IPropType) => {
    const router = useRouter();
    // console.log('Pagination Comp', page, pageCount);

    const isNextDisabled = (): boolean => {
        return page >= pageCount;
    };

    const isPrevDisabled = (): boolean => {
        return page <= 1;
    };

    const handlePaginate = async (direction: TDirection) => {
        console.log('Previous', direction);
        if (direction === 1 && isNextDisabled()) {
            return;
        }

        if (direction === -1 && isPrevDisabled()) {
            console.log(direction === -1 && isPrevDisabled());
            return;
        }
        const queryString = qs.stringify({
            // ...router.query,
            page: page + direction,
        });

        router.push(`${redirectUrl}?${queryString}`);
    };

    return (
        <div className="flex justify-center mt-24">
            <button
                onClick={() => handlePaginate(-1)}
                className={`${'bg-primary py-2 px-4 text-white w-24 rounded'} ${
                    isPrevDisabled() ? 'disable' : ''
                }`}>
                Previous
            </button>
            <button
                onClick={() => handlePaginate(1)}
                className={`${'bg-primary py-2 px-4 text-white w-24 rounded ml-4'} ${
                    isNextDisabled() ? 'disable' : ''
                }`}>
                Next
            </button>
        </div>
    );
};

export default Pagination;