import React from "react";
import Image from "next/image";

const FaqOne = () => {
  return (
    <section className="faq-section ptb-120 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="faq-wrapper">
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">1.</span> How does VR
                  wedding work?
                </h5>
                <p>
                  A Virtual Reality (VR) wedding involves capturing the event
                  using 360-degree cameras and creating a fully immersive
                  experience for viewers. Professional VR photographers and
                  videographers use specialized cameras to capture every angle
                  of the wedding venue, which is then stitched together to
                  create a seamless 360-degree video that can be viewed using a
                  VR headset or smartphone with a VR app. The viewer can move
                  their head and look around the virtual environment as if they
                  were physically present at the wedding.
                </p>
              </div>
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">2.</span> I don't have
                  VR Headset!
                </h5>
                <p>
                  Even though not everyone may have a VR headset, VR wedding
                  coverage is still a great option to consider. Just like how
                  people chose to capture their weddings in video using a
                  handycam before televisions were common, VR weddings can still
                  be enjoyed without a VR headset. Many VR wedding coverage
                  providers offer a package that includes a VR headset or
                  discounts for those who do not want one.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="faq-wrapper">
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">3.</span> How to view
                  VR Wedding videos?
                </h5>
                <p>
                  To view VR wedding videos, you can use platforms such as
                  YouTube and Facebook, which support 360-degree Virtual Reality
                  videos. These videos can be viewed on these platforms using a
                  VR headset such as Oculus for the best experience.
                </p>
              </div>
              <div className="faq-item mb-5">
                <h5>
                  <span className="h3 text-primary me-2">4.</span>Is 20,000 INR
                  per refferal real? Any hidden condition?
                </h5>
                <p>
                  We understand that advertisements can be costly and wasteful,
                  which is why we have a referral program instead. Our referral
                  program offers a commission of 20k INR for every successful
                  booking made through your referral. There are no hidden
                  conditions - simply introduce us to someone who is interested,
                  and if they book with us, you make a profit.{" "}
                </p>
              </div>  
              <div className="faq-item">
                <h5>
                  <span className="h3 text-primary me-2">5.</span> When do I get
                  my money?
                </h5>
                <p>
                  {" "}
                  Once the customer has made a successful payment, we will
                  deposit the referral amount into your bank account within 48
                  hours. We value your trust in our referral program and strive
                  to make the process as efficient and transparent as possible.
                </p>
              </div>          
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
