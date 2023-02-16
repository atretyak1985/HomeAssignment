import {Dna} from "react-loader-spinner";

/*
This function renders a DNA loading spinner when the loading variable is set to true
The loading variable is passed into the function as a prop
 */
export const Loader = ({loading}) => (
    <div className='absolute -top-24 flex w-full justify-center'>
        <Dna
            visible={loading}
            height="80"
            width="160"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    </div>
)
