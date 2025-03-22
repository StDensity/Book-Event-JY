import React from "react";
import Badge from "./Badge/Badge";
import BadgeCircular from "./Badge/BadgeCircular";
import { Bookmark, Plus } from "lucide-react";
import Avatar from "./Avatar";
import ReadMore from "./ReadMore";
import Accordion from "./Accordion";

const ContentArea = () => {
  return (
    <div className="-mt-10 w-full rounded-t-4xl bg-white">
      <div className="relative">
        <div className="shadow-accent-primary absolute -top-8 right-8 rounded-full shadow-2xl">
          <BadgeCircular
            content={<Bookmark className="size-8 fill-white stroke-white" />}
          />
        </div>
        <div className="px-8 pt-14">
          {/* Content Header */}

          <div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">NFT Workshop</div>
              <Badge content="Ended" />
            </div>

            <p className="pt-4 font-light">
              Learn how to buy NFT in India. All about NFT marketplaces
            </p>
          </div>

          <div className="pt-4">
            {/* Avatar */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-4">
                <Avatar url="/images/avatar.jpg" />
                <p className="text-accent-primary font-medium">SoulCurryArt</p>
              </div>
              <p className="text-text-secondary text-sm">Posted 1 month ago</p>
            </div>

            {/* Date and time */}
            <div className="flex justify-between pt-6">
              <div className="space-y-1">
                <p className="text-accent-primary font-semibold">Date</p>
                <p className="font-bold">25 Oct 2021</p>
              </div>
              <div className="space-y-1">
                <p className="text-accent-primary font-semibold">Time</p>
                <p className="font-bold">7:30 pm</p>
              </div>
              <div className="space-y-1">
                <p className="text-accent-primary font-semibold">Duration</p>
                <p className="font-bold">60 min</p>
              </div>
            </div>

            {/* Event Contents */}
            <div className="pt-8">
              <p className="text-accent-primary font-semibold">
                This event includes
              </p>
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-medium">👍🏻</p>
                  <p>Direct interaction with the instructor</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-medium">📺</p>
                  <p>Access on mobile and web</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-medium">🎥</p>
                  <p>Session recording after the workshop</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-medium">⌛</p>
                  <p>1 hour live session</p>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="pt-8">
              <p className="text-accent-primary font-semibold">
                About the workshop
              </p>
              <div className="pt-4 font-light">
                <ReadMore
                  length={100}
                  content="This workshop will provide knowledge about the Introduction to NFT and
         how to transition from traditional art into NFT. The creator will talk
         about new paradigm shift in artistic acceptance, and the future of
         digital art."
                />
              </div>
            </div>

            {/* About the host */}

            <div className="pt-8">
              <p className="text-accent-primary font-semibold">About host</p>
              <div className="flex items-center justify-between pt-4">
                <Avatar className="size-26" url="/images/avatar.jpg" />
                <div>
                  <p className="text-lg font-bold">SoulCurryArt</p>
                  <p className="text-sm font-light">@soulcurryart</p>
                </div>
                <div>
                  <BadgeCircular content={<Plus className="stroke-white" />} />
                </div>
              </div>
              <div className="pt-4">
                <ReadMore
                  length={100}
                  content="Modern Cubist abstract artist, NFT artist, Art educator &
                  bridging the Contemporary with the Digital art realms."
                  showMoreText="Read full story"
                  contentClassName="font-light"
                />
              </div>
            </div>

            {/* FAQ */}

            <div className="pt-8">
              <p className="text-accent-primary font-semibold">
                Frequently Asked Questions
              </p>
              <p className="pt-4 font-light">
                Find all your answers related to this event.
              </p>

              <div className="space-y-4 pt-4">
                <Accordion
                  title={"Who can participate in this workshop?"}
                  content={"Yes, anyone can join this workshop."}
                />
                <Accordion
                  title={
                    "What are the prerequisites for joining this workshop?"
                  }
                  content={"You need a stable internet connection."}
                />
                <Accordion
                  title={"can i interact with the host at the workshop?"}
                  content={"At the end of the workshop, you can interact."}
                />
                <Accordion
                  title={"is it pre-recorded or live workshop?"}
                  content={"Live workshop."}
                />
              </div>

              <div className="pt-8">
                <p className="text-accent-primary font-light">
                  Don't see the answer you're looking for?
                </p>
                <p className="text-accent-primary font-bold">
                  Post Your Question
                </p>

                <p className="pt-2 font-light">
                  Your question might be answered by the host, speakers or
                  GoSocial team
                </p>

                <input
                  type="text"
                  placeholder="Please submit your questions."
                  className="border-text-secondary placeholder:text-text-secondary mt-4 w-full rounded-md border p-2 placeholder:italic"
                />
                <button className="bg-accent-primary mt-4 rounded-md p-2 px-6 text-white">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
