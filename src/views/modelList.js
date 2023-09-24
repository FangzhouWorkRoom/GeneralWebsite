const modules = import.meta.glob("@/views/*.vue");

const components = {};

for (let path in modules) {
    console.log(path)
}
export default components;