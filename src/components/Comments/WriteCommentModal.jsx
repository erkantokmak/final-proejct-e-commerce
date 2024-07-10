"use client"
import { postComment } from "@/api/server";
import { ReviewButton } from "@/styles/CommentStyle";
import { Rating } from "@smastrom/react-rating"
import { useTranslations } from "next-intl"
import { useState } from "react";


const WriteCommentModal = ({ data }) => {
    const t = useTranslations();

    const [rate, setRate] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await postComment(data.id, rate, comment);
            if (res.status === 200) {
                alert('Comment added successfully')
            }
        } catch (error) {
            alert(error.message)
        }
    }


    return (
        <>
            <ReviewButton type="button" data-bs-toggle="modal" data-bs-target="#reviewModal">{t('writeReview')}</ReviewButton>
            {/* <button type="button" data-bs-toggle="modal" data-bs-target="#reviewModal">{t('writeReview')}</button> */}

            <div className="modal fade"
                id="writeReview"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{t('writeReview')}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <Rating onChange={setRate} />
                                <textarea
                                    className="form-control mt-3"
                                    placeholder={t('writeReview')}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                ></textarea>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WriteCommentModal