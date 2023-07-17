/*
    Footer.jsx

    Footer component (static component)
*/
export function Footer() {
    return (
        <footer class="max-w-screen-lg pb-4 mt-12 mx-auto">
            <div class=" grid grid-cols-3">
                <div>
                    <h3 class="text-sm text-gray-700">About</h3>
                </div>

                <div>
                    <h3 class="text-sm text-gray-700">Source Code</h3>
                </div>  

                <div>
                    <h3 class="text-sm text-gray-700">Tech Stack</h3>
                </div>
            </div>
            <h3 class="mt-2 text-sm text-gray-700">This LinkedIn Does Not Exist 2023</h3>
        </footer>
    );
}