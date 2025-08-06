// src/api/shipmentService.ts
import client from './client';

interface FrappeListResponse<T> {
  message: T[];
}

export interface ShipmentStatus {
  name: string;
  // Add other fields as needed
}

export interface Shipment {
  name: string;
  // Add other fields as needed
}

export const getShipmentStatuses = async (): Promise<
  FrappeListResponse<ShipmentStatus>
> => {
  const formData = new FormData();
  formData.append('doctype', 'AWB Status');
  formData.append('fields', '["*"]');

  const response = await client.post<FrappeListResponse<ShipmentStatus>>(
    '/frappe.client.get_list',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export const getShipments = async (
  searchTerm: string,
): Promise<FrappeListResponse<Shipment>> => {
  const payload = {
    doctype: 'AWB',
    fields: ['*'],
    filters: {
      name: ['like', `%${searchTerm}%`],
    },
  };

  const response = await client.post<FrappeListResponse<Shipment>>(
    '/frappe.client.get_list',
    payload,
  );

  return response.data;
};
