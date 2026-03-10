import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

const curatedReviews: Review[] = [
  {
    author: "Priya M.",
    rating: 5,
    text: "The fish moilee is the best I've had outside Kerala. Generous portions and the flavours are spot on. We come here every weekend now.",
    relativeTime: "2 weeks ago",
  },
  {
    author: "Arun K.",
    rating: 5,
    text: "Authentic Kerala meals on banana leaf — just like back home. The lamb biryani is incredible. Staff is warm and welcoming.",
    relativeTime: "1 month ago",
  },
  {
    author: "Sarah T.",
    rating: 5,
    text: "Hidden gem in PJ! The parotta with mutton curry is addictive. Everything tastes homemade. Fair prices for the quality you get.",
    relativeTime: "3 weeks ago",
  },
  {
    author: "Rajesh N.",
    rating: 4,
    text: "Great breakfast spot — the masala dosa is crispy and the sambar has real depth. Sulaimani tea is a must-try. Cozy little place.",
    relativeTime: "1 month ago",
  },
  {
    author: "Naveen R.",
    rating: 5,
    text: "One of the most satisfying Kerala meals I've had in PJ. The curries were rich without being too heavy, and the banana leaf set felt complete and comforting.",
    relativeTime: "2 weeks ago",
  },
  {
    author: "Meera S.",
    rating: 5,
    text: "The masala dosa was crisp, the chutneys were fresh, and the sambar had proper depth. You can tell the kitchen knows what it's doing.",
    relativeTime: "3 weeks ago",
  },
  {
    author: "Jason L.",
    rating: 5,
    text: "Tried the fish curry and parotta and both were excellent. The fish was fresh, the gravy had real flavour, and the portions were generous for the price.",
    relativeTime: "1 month ago",
  },
  {
    author: "Farah A.",
    rating: 4,
    text: "Warm service, cozy setting, and food that actually tastes homemade. The biryani was fragrant and the spice level was balanced nicely.",
    relativeTime: "3 weeks ago",
  },
  {
    author: "Kishore P.",
    rating: 5,
    text: "The seafood dishes here are seriously underrated. We ordered the fish moilee and prawn masala, and both were full of flavour without feeling overly oily.",
    relativeTime: "1 month ago",
  },
  {
    author: "Alicia T.",
    rating: 5,
    text: "Really enjoyable lunch spot. The staff were attentive, the place felt comfortable, and the food came out hot and fresh. Will definitely be back for the breakfast menu.",
    relativeTime: "2 weeks ago",
  },
  {
    author: "Harish V.",
    rating: 5,
    text: "Finally found a place that gets Kerala-style flavours right. The parotta had great texture and the mutton curry paired with it perfectly.",
    relativeTime: "1 month ago",
  },
  {
    author: "Shalini K.",
    rating: 4,
    text: "Nice atmosphere and very welcoming team. I especially liked the dosa and tea pairing. Simple food done properly, which is harder to find than people admit.",
    relativeTime: "2 weeks ago",
  },
];

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [api, setApi] = useState<CarouselApi | null>(null);

  const GOOGLE_REVIEW_URL =
    "https://www.google.com/search?client=opera&hs=M8N&sca_esv=63d30f16e610b967&sxsrf=ANbL-n6ictoONEGzZ2dZqLc-qusTvYCvJA:1773154503148&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOaUAFqwJnIEhTEWIiSLuliI5XNU2He_vb5XwbBqUWzpTrFeBXaa9iq7EVQeu4nLVZyfsNnt5U-VpWDnpd39IVKtbhBvA5jG7UoTHIzi57AWedX0MyA%3D%3D&q=Chacko+Restaurant+Reviews&sa=X&ved=2ahUKEwjE1Kqiy5WTAxUDRmcHHXIGIpwQ0bkNegQILRAF&biw=1533&bih=902&dpr=1.8#lrd=0x31cc4b3e16e4e041:0xe41d7285d0ba4fcc,3,,,,";

  const toggleExpand = (index: number) => {
    const next = new Set(expandedReviews);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setExpandedReviews(next);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-secondary text-secondary" : "text-white/20"
        }`}
      />
    ));

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section id="reviews" className="py-16 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">
            Reviews
          </p>

          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-4">
            What Guests Say
          </h2>

          <p className="font-body text-sm md:text-lg text-muted-foreground">
            A few recent highlights from Google Reviews.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3 rounded-full font-body text-sm md:text-base font-medium hover:opacity-90 transition-opacity"
          >
            Drop us a Review
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous reviews"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-border bg-background/40 text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next reviews"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full border border-border bg-background/40 text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {curatedReviews.map((review, index) => {
                const isExpanded = expandedReviews.has(index);
                const shouldTruncate = review.text.length > 230;
                const displayText =
                  shouldTruncate && !isExpanded
                    ? `${review.text.slice(0, 230)}...`
                    : review.text;

                return (
                  <CarouselItem
                    key={`${review.author}-${index}`}
                    className="pl-4 basis-full md:basis-1/2 xl:basis-1/3"
                  >
                    <div className="h-full min-h-[420px] flex flex-col rounded-[24px] border border-border bg-background/60 p-6 md:p-8">
                      <div className="mb-5 flex justify-center">
                        <div className="flex gap-1">{renderStars(review.rating)}</div>
                      </div>

                      <div className="flex-1 text-center">
                        <p className="font-body whitespace-pre-line text-sm md:text-base leading-8 text-foreground">
                          {displayText}
                        </p>

                        {shouldTruncate && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(index)}
                            className="mt-4 text-sm underline underline-offset-4 text-foreground/80 hover:text-foreground"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>

                      <div className="mt-8 border-t border-border pt-6">
                        <div className="flex items-center justify-center gap-4">
                          <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center font-body font-semibold">
                            {getInitials(review.author)}
                          </div>

                          <div className="text-left">
                            <p className="font-body text-base font-semibold text-foreground">
                              {review.author}
                            </p>
                            <p className="font-body text-sm text-muted-foreground">
                              {review.relativeTime}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <div className="flex md:hidden items-center justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous reviews"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background/40 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next reviews"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-background/40 text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;