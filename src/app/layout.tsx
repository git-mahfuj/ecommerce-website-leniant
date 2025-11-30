import {Toaster} from "react-hot-toast";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="">
        {children}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toasterId="default"
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            removeDelay: 1000,
            style: {
              background: "#df226f",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#df226f",
                secondary: "white",
              },
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;