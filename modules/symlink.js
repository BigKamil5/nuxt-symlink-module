const fs = require('fs-extra')
const path = require('path')

module.exports = function nuxtVendor () {
  console.log('AHSDHASHDHASDHAHDS');
  const vendorDir = path.resolve(__dirname, '../static', 'agency');
  const drugiPath = path.resolve(__dirname, '../agency');
  console.log('AHSDHASHDHASDHAHDS324324');

  // const vendor = [].concat(this.options.vendor, moduleOptions.vendor)
  //   .filter(v => v)
  //   .map(v => {
  //     for (let dir of modulesDir) {
  //       const src = path.resolve(dir, v.src || v)
  //       if (fs.existsSync(src)) {
  //         return {
  //           src,
  //           dst: v.dst || path.resolve(vendorDir, v)
  //         }
  //       }
  //     }
  //   })
  //   .filter(v => v)
  //
  // if (!vendor.length) {
  //   return
  // }

  // Ensure static/vendor directory exists
  fs.ensureDirSync(vendorDir);
  console.log('AHSDHASHDHASDHAHDS32432412313123');
  console.log(drugiPath);
  console.log(vendorDir);

  fs.removeSync(vendorDir);
  fs.ensureSymlinkSync(drugiPath, vendorDir, 'junction')
  console.log('krakrakrk');

  // // Link vendors
  // vendor.forEach(({ src, dst }) => {
  //   fs.removeSync(dst)
  //   fs.ensureSymlinkSync(src, dst, 'junction')
  // })
}
