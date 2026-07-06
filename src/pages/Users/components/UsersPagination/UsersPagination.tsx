import "./UsersPagination.css";


interface UsersPaginationProps {

    currentPage: number;

    totalPages: number;

    showingCount: number;

    totalUsers: number;

    onPageChange:
        (page: number) => void;

}


const UsersPagination = ({

    currentPage,

    totalPages,

    showingCount,

    totalUsers,

    onPageChange

}: UsersPaginationProps) => {


    const pages = Array.from(

        {
            length: totalPages
        },

        (_, index) =>
            index + 1

    );


    return (

        <div className="users-pagination">


            <span className="users-pagination-info">

                Showing {showingCount} of {totalUsers} users

            </span>


            <div className="users-pagination-controls">


                <button

                    type="button"

                    onClick={() =>

                        onPageChange(
                            currentPage - 1
                        )

                    }

                    disabled={
                        currentPage === 1
                    }

                >

                    Prev

                </button>


                {
                    pages.map(
                        (page) => (

                            <button

                                key={page}

                                type="button"

                                className={
                                    currentPage === page

                                        ? "active"

                                        : ""
                                }

                                onClick={() =>

                                    onPageChange(
                                        page
                                    )

                                }

                            >

                                {page}

                            </button>

                        )
                    )
                }


                <button

                    type="button"

                    onClick={() =>

                        onPageChange(
                            currentPage + 1
                        )

                    }

                    disabled={
                        currentPage ===
                        totalPages
                    }

                >

                    Next

                </button>


            </div>


        </div>

    );

};


export default UsersPagination;