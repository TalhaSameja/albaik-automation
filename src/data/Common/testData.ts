/**
 * Cross-Platform Test Data
 * Centralized test data for web portal and mobile app
 */

// export const qrCodeUrls: { [key: string]: string } = {
//   'branch-KTM Test Branch-qrcode.svg': 'albaik://store/539',
// };
export const qrCodeUrls: { [key: string]: string } = {
  // Change the key here to match your Feature File
  'KTM_BRANCH': 'albaik://store/539', 
};
export const testData = {
  web: {
    baseUrl: 'https://staging.ordering.albaikcloud.com/',
    email: 'jane.doe@albaik.com',
    password: 'Kualitatem123',
    
  },
  mobile: {
    phoneNumber: '512399999',
    password: 'Kualitatem123',
    qrCodes: qrCodeUrls,
  },
  carPickupOrder: {
    itemName: 'Car Pickup Order',
    description: 'Standard car pickup service order',
  },
  qrCodes: qrCodeUrls,
};

export const orders = {
  carPickup: {
    storeName: 'Albaik',
    serviceType: 'Car Pickup',
    expectedStatus: 'Processing',
  },
};

export default testData;
