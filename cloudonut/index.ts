export enum EStates {
  'AL' = 'Alabama',
  'AK' = 'Alaska',
  'AS' = 'American Samoa',
  'AZ' = 'Arizona',
  'AR' = 'Arkansas',
  'CA' = 'California',
  'CO' = 'Colorado',
  'CT' = 'Connecticut',
  'DE' = 'Delaware',
  'DC' = 'District Of Columbia',
  'FM' = 'Federated States Of Micronesia',
  'FL' = 'Florida',
  'GA' = 'Georgia',
  'GU' = 'Guam',
  'HI' = 'Hawaii',
  'ID' = 'Idaho',
  'IL' = 'Illinois',
  'IN' = 'Indiana',
  'IA' = 'Iowa',
  'KS' = 'Kansas',
  'KY' = 'Kentucky',
  'LA' = 'Louisiana',
  'ME' = 'Maine',
  'MH' = 'Marshall Islands',
  'MD' = 'Maryland',
  'MA' = 'Massachusetts',
  'MI' = 'Michigan',
  'MN' = 'Minnesota',
  'MS' = 'Mississippi',
  'MO' = 'Missouri',
  'MT' = 'Montana',
  'NE' = 'Nebraska',
  'NV' = 'Nevada',
  'NH' = 'New Hampshire',
  'NJ' = 'New Jersey',
  'NM' = 'New Mexico',
  'NY' = 'New York',
  'NC' = 'North Carolina',
  'ND' = 'North Dakota',
  'MP' = 'Northern Mariana Islands',
  'OH' = 'Ohio',
  'OK' = 'Oklahoma',
  'OR' = 'Oregon',
  'PW' = 'Palau',
  'PA' = 'Pennsylvania',
  'PR' = 'Puerto Rico',
  'RI' = 'Rhode Island',
  'SC' = 'South Carolina',
  'SD' = 'South Dakota',
  'TN' = 'Tennessee',
  'TX' = 'Texas',
  'UT' = 'Utah',
  'VT' = 'Vermont',
  'VI' = 'Virgin Islands',
  'VA' = 'Virginia',
  'WA' = 'Washington',
  'WV' = 'West Virginia',
  'WI' = 'Wisconsin',
  'WY' = 'Wyoming',
}

export interface IAddress {
  apt_number: string;
  street: string;
  city: string;
  zip_code: string;
  state: EStates;
  longitude: string;
  latitude: string;
  nickname: string;
  is_default: boolean;
  phone: string;
}

// Orders

export interface IOrder {
  _id: string;
  order_id: string;
  user_id: string;
  order_type: EOrderType;
  payment_id: string;
  items: IOrderItem[];
  discounts?: string[];
  subtotal: number;
  discounts_amount: number;
  tax_amount: number;
  delivery_fee: number;
  packing_fee: number;
  platform_fee: number;
  tips: number;
  grand_total: number;
  note?: string;
  destination: IAddress;
  status: EOrderStatus;
  driver_id: string;
  last_updated_at: Date;
  group_order_id?: string;
  group_order_time?: IGroupOrderTimeSlot;
  schedule_time: string;
  createdAt?: string;
  vendor?: {
    title: IVendor['title'];
    vendor_id: IVendor['vendor_id'];
  };
  vendorTitles?: string[];
  vendorIds?: string[];
  userName?: IUser['nickname'];
  success?: boolean;
  deliveryTime?: Date;
}

export interface IOrderItem {
  vendor_id: string;
  vendor_title: string;
  title: string;
  quantity: number;
  items_price_subtotal: number;
  variant_title?: string | null | undefined;
  item_image?: string;
  modifiers: IOrderModifier[];
}

export interface IOrderRequestItem {
  item_id: string;
  quantity: number;
  variant_id?: string;
  modifiers: IOrderModifier[];
  note?: string;
}

export interface IOrderModifier {
  id: string;
  title: string;
  upcharge: number;
  isMultiSelect: boolean;
}

export interface IOrderRequestBody {
  user_id: string;
  payment_id: string;
  discounts?: IDiscount[];
  note?: string;
  order_type: EOrderType;
  destination: IAddress;
  status: EOrderStatus;
  items: IOrderRequestItem[];
  tips: number;
  group_order_id?: string;
  group_order_time?: IGroupOrderTimeSlot;
  schedule_time: string;
}

export enum EOrderType {
  SCHEDULED = 'SCHEDULED',
  INSTANT = 'INSTANT',
  GROUP = 'GROUP',
  LATENIGHT = 'LATENIGHT',
}

export enum EOrderStatus {
  UNPAID = 'UNPAID',
  CANCELLED = 'CANCELLED',
  PENDING = 'PENDING',
  SCHEDULED = 'SCHEDULED',
  PREPARING = 'PREPARING',
  DELIVERING = 'DELIVERING',
  DELIVERED = 'DELIVERED',
}

// Group orders pickup locations

export interface IGroupOrderPickupLocation {
  title: string;
  address: IAddress;
  image?: string;
  participating_vendors: string[];
  arrivals: IGroupOrderTimeSlot[];
}

export interface IGroupOrderTimeSlot {
  arrival_time: number;
  departure_time: number;
  deadline_time: number;
}

// Discounts

export interface IDiscount {
  code: string;
  start_date: Date;
  end_date: Date;
  type: EDiscountType;
  target_amount?: number;
  reduce_amount?: number;
  percentage?: number;
  vendors: [string];
  users: [string];
  limit?: number;
  maximum?: number;
}

export enum EDiscountType {
  REDUCTION = 'REDUCTION',
  PERCENTAGE = 'PERCENTAGE',
}

// user

export enum EGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NULL = 'NULL',
}

export interface IUser {
  _id?: string;
  user_id: string;
  phone: string;
  nickname?: string;
  password: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  stripe_customer_id?: string;
  address_book: IAddress[];
  social_provider?: string;
  wx_open_id?: string;
  wx_union_id?: string;
  gender?: EGender;
  avatar?: string;
  favorite_vendors?: string[];
  date_of_birth?: Date;
  coupons: string[];
}

export interface ICreateUser {
  phone: IUser['phone'];
  password: IUser['password'];
}

// vendor

export interface IVendor {
  _id: string;
  vendor_id: string;
  title: string;
  phone: string;
  address: IAddress;
  open_hours: [IOpenHour];
  logo?: string;
  background_image?: string;
  tags?: [string];
  group_buy?: [string];
  menu_assets?: [string];
  email?: string;
  password?: string;
  participating_vendors: TVendorLogo[];
}

export type TVendorLogo = {
  _id: string;
  vendor_id: string;
  logo?: string;
};

export interface IOpenHour {
  _id: string;
  open: number;
  close: number;
}

export interface IVendorWithItems extends IVendor {
  items?: IDishItem[];
}

export interface IVendorBasicInfo {
  _id?: string;
  vendor_id: IVendor['vendor_id'];
  logo: IVendor['logo'];
  title: IVendor['title'];
  phone: IVendor['phone'];
}

// dish item
export interface IDishItem {
  _id: string;
  title: string;
  vendor_id: string;
  category_id: string;
  description?: string;
  base_price: number;
  base_price_compared_at?: number;
  variants: string[]; //必選
  image?: string;
  modifiers?: string[];
}

export interface IDishItemDetail {
  title: string;
  description?: string;
  image?: string;
  base_price: number;
  base_price_compared_at?: number;
  _id: string;
  variants: IDishVariant[];
  modifiers?: IModifierGroup[];
  vendor_id: string;
  vendor_title: string;
}

// category
export interface IDishCategory {
  title: string;
  vendor_id: string;
  description?: string;
  image?: string;
  itemsCount?: number;
  _id?: string;
}

// variant
export interface IDishVariant {
  _id?: string;
  title: string;
  vendor_id: string;
  description?: string;
  price: number;
  price_compared_at: number;
  count: number;
}

// modifiers

export interface IModifierByVariant {
  variant: string; // id of the variant
  upcharge: number;
}

export interface IModifier {
  _id?: string;
  title: string;
  upcharge: number; // should be mutually exclusive with byVariants
  byVariants: IModifierByVariant[];
}

export interface IModifierGroup {
  _id?: string;
  instruction: string;
  title?: string;
  modifiers: IModifier[];
  limitMin: number; // both max/min 0 meaning no limit
  limitMax: number;
  vendorId: string;
  variants: string[];
}

// reviews

export interface IOrderReview {
  order_id: string;
  vendor_id: string;
  user_id: string;
  submit_date: Date;
  star: number;
  comment?: string;
  images?: string[];
}

// pagination
export interface Pagination {
  data: any;
  total: number;
  totalPages: number;
  currentPage: number;
}

// payments

export interface IPayment {
  payment_provider: EPaymentProvider;
  provider_payment_id: string;
  total_amount: number;
}

export enum EPaymentProvider {
  STRIPE = 'STRIPE',
  PAYPAL = 'PAYPAL',
}

// promp

export interface IPromo {
  type: string;
  slider: [{ image: string; vendor_id: string }];
  recommendVendors: [string];
}

// vendor user

export interface IVendorUser {
  password: string | null;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  isAdmin: string[];
  isUser: string[];
  lastLoggedIn: Date;
  userId: string;
  isSuperAdmin: boolean;
}

// driver review

export interface IDriverReview {
  order_id: string;
  driver_id: string;
  user_id: string;
  submit_date: Date;
  star: number;
  comment?: string;
}

// config

export interface IConfig {
  deliveryFeeMultiplier: number;
  standardCommissionRate: number;
  packageFee: number;
  platformDiscount: number;
  platformFeeRate: number;
  minimumDeliveryAmount: number;
}

// vendor event

export interface IVendorEvents {
  vendor_id: string;
  start_date: Date;
  end_date: Date;
  type: EVendorEventType;
  target_amount?: number;
  reduce_amount?: number;
  percentage?: number;
}

export enum EVendorEventType {
  PERCENT = 'PERCENT',
  REDUCTION = 'REDUCTION',
}

// App specific
export interface IMenu {
  category_id: string;
  title: string;
  data: IDishItem[];
  index: number;
}

export interface IDishItemDetail {
  title: string;
  description?: string;
  image?: string;
  base_price: number;
  base_price_compared_at?: number;
  _id: string;
  variants: IDishVariant[];
  modifiers?: IModifierGroup[];
  vendor_id: string;
  vendor_title: string;
}

export interface ICartModifier {
  id: string;
  title: string;
  upcharge: number;
  isMultiSelect: boolean;
}

export interface IPaymentMethod {
  id: string;
  object: string;
  billing_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: string;
      state: string;
    };
    email?: string;
    name?: string;
    phone?: string;
  };
  card: {
    brand: string;
    checks: {
      address_line1_check: string;
      address_postal_code_check: string;
      cvc_check: string;
    };
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: unknown;
    last4: string;
    networks: {
      available: [string];
      preferred: unknown;
    };
    three_d_secure_usage: {
      supported: boolean;
    };
    wallet: unknown;
  };
}
