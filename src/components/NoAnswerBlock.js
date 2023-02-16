/*
NoAnswerBlock is a functional component that renders a div element that displays a message when there
is no answer for a question. It also provides a button to clear the question.
 */

export const NoAnswerBlock = ({ clearAll }) => (
    <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Now answers for this question, please change your question.
            </h3>
            <button onClick={clearAll} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                Clear
            </button>
        </div>
    </div>
)
