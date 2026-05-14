/**
 * Cross-Platform Test Data
 * Centralized test data for web portal and mobile app
 */


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
    phoneNumber: '532255875',
    password: '11223344',
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
