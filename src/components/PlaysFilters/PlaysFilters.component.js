import { Disclosure } from "@headlessui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const PlaysFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-4">
            {open ? <FiChevronUp /> : <FiChevronDown />}
            <span className={open ? "text-red-600" : "text-gray-900"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex item-center gap-3 flex-wrap">
              {props.tags.map((tags) => (
                <>
                  <div className="border-2 border-gray-200 px-2 py-1">
                    <span className="text-red-600">{tags}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilter;
