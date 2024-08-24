const BlogCardsSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-10 max-auto p-2">
      {[...Array(6)].map((_, index) => {
        return (
          <div className="flex w-96 flex-col gap-4" key={index}>
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};
export default BlogCardsSkeleton;
