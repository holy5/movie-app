import React, { FormEvent, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { apiMethod } from "../../api/apiConfig";
import { htmlToText } from "../../Helpers/misc";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [suggest, setSuggest] = useState<string[]>([]);
  const debounceRef = useRef<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setSuggest([]);
    if (!input.trim()) return;
    debounceRef.current = setTimeout(async () => {
      const data = await apiMethod.getSearchKeyword(input.trim());
      setSuggest(data.map((item: string) => htmlToText(item)));
    }, 500);
  }, [input]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      navigate(`/search?q=${encodeURIComponent(input.trim())}`);
    }
    setSuggest([]);
  };

  return (
    <>
      <form
        className="relative flex items-center border-2 rounded-full md:border-none border-text md:px-2 md:py-2 xl:border-solid xl:w-[50%] xl:py-1"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Search anything"
          className="px-3 w-[88%] py-1 bg-transparent outline-none md:placeholder:text-xl md:hidden xl:inline-block xl:placeholder:text-xl"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => e.stopPropagation()}
          onKeyUp={(e) => e.stopPropagation()}
          onKeyPress={(e) => e.stopPropagation()}
        />
        <button className="absolute right-0 mr-2">
          <BiSearch className="text-2xl text-text md:text-4xl xl:text-2xl" />
        </button>
        {suggest.length > 0 && (
          <>
            <div className="absolute flex flex-col justify-center :w-[95%] rounded-md mt-2 text-lg font-medium top-full item-start bg-mainBg px-2 gap-1 py-2 max-h-[300px] xl:max-h-[500px] overflow-auto z-50">
              {suggest.map((item, index) => {
                return (
                  <Link
                    to={`/search?q=${encodeURIComponent(item)}`}
                    key={index}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default SearchBox;
