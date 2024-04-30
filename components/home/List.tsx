import Image from "next/image";

import * as m from "@/paraglide/messages";
import dementia_image from "@/public/deniz-altindas-t1XLQvDqt_4-unsplash.jpg";

const List = () => {
  return (
    <section className="bg-muted px-4 py-10 sm:py-16 md:px-8 lg:py-24">
      <div className=" mx-auto max-w-7xl  ">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="w-full">
            <Image className=" rounded-3xl" src={dementia_image} alt="" />
          </div>

          <div className="">
            <p className="mb-12 text-base font-semibold uppercase tracking-wider text-primary">
              {m.home_metadata_title()}
            </p>

            <ul className="list-outside list-decimal pl-6">
              <li>{m.Advanced_healthcare()}</li>
              <li>{m.Advanced_medical_care()}</li>
              <li>{m.Specialised_healthcare_professionals()}</li>
              <li>{m.Innovative_medical_practices()}</li>
              <li>{m.Advanced_medical_technologies()}</li>
              <li>{m.Advanced_treatments_and_therapies()}</li>
              <li>{m.Specialist_medical_services()}</li>
              <li>{m.Advanced_medical_procedures()}</li>
              <li>{m.Healthcare_expertise()}</li>
              <li>{m.Cuttingedge_healthcare_solutions()}</li>
              <li>{m.Dementia_care()}</li>
              <li>{m.Alzheimers_care()}</li>
              <li>{m.Dementia_support()}</li>
              <li>{m.Dementia_treatment()}</li>
              <li>{m.Dementia_care_facilities()}</li>
              <li>{m.Dementia_care_programmes()}</li>
              <li>{m.Dementia_care_centres()}</li>
              <li>{m.Dementia_research()}</li>
              <li>{m.Dementia_care_at_home()}</li>
              <li>{m.Dementia_prevention()}</li>
              <li>{m.Advanced_care_planning()}</li>
              <li>{m.Care_planning_for_advanced_dementia()}</li>
              <li>{m.Advanced_care_planning_and_dementia_care()}</li>
              <li>{m.Care_planning_for_advanced_dementia_patients()}</li>
              <li>
                {m.Advanced_care_planning_and_palliative_care_in_dementia()}
              </li>
              <li>{m.Dementia_and_future_care_planning()}</li>
              <li>{m.Advanced_care_planning_and_living_wills_in_dementia()}</li>
              <li>
                {m.Advanced_care_planning_and_quality_of_life_in_dementia()}
              </li>
              <li>
                {m.Advanced_care_planning_and_decisionmaking_in_the_last_phase_of_life()}
              </li>
              <li>
                {m.Advanced_care_planning_and_family_engagement_in_dementia()}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default List;
