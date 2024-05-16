import Accordian from "@/Components/Accordian";
import CardList from "@/Components/CardList";
import CourseList from "@/Components/CourseList";
import CourseReview from "@/Components/CourseReview";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/ui/Footer";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Udemy" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <div>
          <div>
            <Navbar user={auth.user} />
            <CourseList />
            <CardList />
            {/* <CourseReview /> */}

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
