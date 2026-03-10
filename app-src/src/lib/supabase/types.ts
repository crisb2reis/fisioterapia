export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            segments: {
                Row: {
                    id: string
                    slug: string
                    name: string
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    slug: string
                    name: string
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    slug?: string
                    name?: string
                    created_at?: string | null
                }
                Relationships: []
            }
            tenants: {
                Row: {
                    id: string
                    segment_id: string
                    name: string
                    slug: string
                    email: string
                    phone: string | null
                    plan: string | null
                    is_active: boolean | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    segment_id: string
                    name: string
                    slug: string
                    email: string
                    phone?: string | null
                    plan?: string | null
                    is_active?: boolean | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    segment_id?: string
                    name?: string
                    slug?: string
                    email?: string
                    phone?: string | null
                    plan?: string | null
                    is_active?: boolean | null
                    created_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "tenants_segment_id_fkey"
                        columns: ["segment_id"]
                        isOneToOne: false
                        referencedRelation: "segments"
                        referencedColumns: ["id"]
                    }
                ]
            }
            tenant_configs: {
                Row: {
                    id: string
                    tenant_id: string
                    key: string
                    value: Json
                }
                Insert: {
                    id?: string
                    tenant_id: string
                    key: string
                    value: Json
                }
                Update: {
                    id?: string
                    tenant_id?: string
                    key?: string
                    value?: Json
                }
                Relationships: [
                    {
                        foreignKeyName: "tenant_configs_tenant_id_fkey"
                        columns: ["tenant_id"]
                        isOneToOne: false
                        referencedRelation: "tenants"
                        referencedColumns: ["id"]
                    }
                ]
            }
            forms: {
                Row: {
                    id: string
                    tenant_id: string
                    name: string
                    fields: Json
                    is_active: boolean | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    tenant_id: string
                    name: string
                    fields: Json
                    is_active?: boolean | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    tenant_id?: string
                    name?: string
                    fields?: Json
                    is_active?: boolean | null
                    created_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "forms_tenant_id_fkey"
                        columns: ["tenant_id"]
                        isOneToOne: false
                        referencedRelation: "tenants"
                        referencedColumns: ["id"]
                    }
                ]
            }
            leads: {
                Row: {
                    id: string
                    tenant_id: string
                    form_id: string | null
                    name: string
                    email: string | null
                    phone: string | null
                    extra_data: Json | null
                    utm_source: string | null
                    utm_medium: string | null
                    utm_campaign: string | null
                    ip_address: string | null
                    status: string | null
                    created_at: string | null
                }
                Insert: {
                    id?: string
                    tenant_id: string
                    form_id?: string | null
                    name: string
                    email?: string | null
                    phone?: string | null
                    extra_data?: Json | null
                    utm_source?: string | null
                    utm_medium?: string | null
                    utm_campaign?: string | null
                    ip_address?: string | null
                    status?: string | null
                    created_at?: string | null
                }
                Update: {
                    id?: string
                    tenant_id?: string
                    form_id?: string | null
                    name?: string
                    email?: string | null
                    phone?: string | null
                    extra_data?: Json | null
                    utm_source?: string | null
                    utm_medium?: string | null
                    utm_campaign?: string | null
                    ip_address?: string | null
                    status?: string | null
                    created_at?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "leads_form_id_fkey"
                        columns: ["form_id"]
                        isOneToOne: false
                        referencedRelation: "forms"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "leads_tenant_id_fkey"
                        columns: ["tenant_id"]
                        isOneToOne: false
                        referencedRelation: "tenants"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
