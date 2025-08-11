import StarRatings from "react-star-ratings";
import { Review } from "../../models/review";

export const ReviewCard = (props: any) => {
    const review:Review = props.review
  return (
    <div {...props} className="d-flex justify-content-center">
      <div
        className="card text-light rounded-5"
        style={{ width: "50%", backgroundColor: "#10B53480" }}
      >
        <div
          className="d-flex card-header justify-content-evenly mt-4 align-items-center"
          style={{ backgroundColor: "#45f55b4d" }}
        >
          <h6 className="mb-0 w-50">
            {review.title === "" ? "Has no title" : review.title}
          </h6>
          <div className="">
            <StarRatings
              rating={review.rating}
              starDimension="15px"
              starRatedColor="#D4AF37"
            />
          </div>
        </div>
        <div className="card-body d-flex align-items-center">
          <p className="mb-0 m-1">
            Write by: <br />
            {review.userName}
          </p>
          <p className="mt-3 m-1">{review.description}</p>
        </div>
        <div
          className="card-header d-flex justify-content-evenly mb-2 rounded-bottom-4 align-items-center"
          style={{ backgroundColor: "#45f55b4d" }}
        >
          <p className="mb-0">
            Wrote: {review.writingDate.toLocaleDateString()}
          </p>
          <p className="mb-0">
            Place Visited: {review.visitDate.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
