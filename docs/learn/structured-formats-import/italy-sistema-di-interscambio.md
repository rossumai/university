---
title: 'Structured formats import: Sistema di Interscambio (SDI Italy)'
sidebar_label: 'Italy: Sistema di Interscambio'
sidebar_position: 2
---

# Sistema di Interscambio (SDI Italy)

https://www.fatturapa.gov.it/en/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/

```json
{
  "fields": [
    {
      "schema_id": "recipient_name",
      "selectors": [
        "FatturaElettronicaHeader/CessionarioCommittente/DatiAnagrafici/Anagrafica/Denominazione"
      ]
    },
    {
      "schema_id": "recipient_vat_id",
      "selectors": [
        "FatturaElettronicaHeader/CessionarioCommittente/DatiAnagrafici/IdFiscaleIVA/IdCodice"
      ]
    },
    {
      "schema_id": "sender_name",
      "selectors": [
        "FatturaElettronicaHeader/CedentePrestatore/DatiAnagrafici/Anagrafica/Denominazione"
      ]
    },
    {
      "schema_id": "sender_vat_id",
      "selectors": [
        "FatturaElettronicaHeader/CedentePrestatore/DatiAnagrafici/IdFiscaleIVA/IdCodice"
      ]
    },
    {
      "schema_id": "iban",
      "selectors": [
        "FatturaElettronicaBody/DatiPagamento/DettaglioPagamento/IBAN"
      ]
    },
    {
      "schema_id": "document_type_code",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/TipoDocumento"
      ]
    },
    {
      "schema_id": "document_id",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/Numero"
      ]
    },
    {
      "schema_id": "order_id",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiOrdineAcquisto/IdDocumento"
      ]
    },
    {
      "schema_id": "date_issue",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/Data"
      ]
    },
    {
      "schema_id": "date_due",
      "selectors": [
        "FatturaElettronicaBody/DatiPagamento/DettaglioPagamento/DataScadenzaPagamento"
      ]
    },
    {
      "schema_id": "payment_terms_start_date",
      "selectors": [
        "//FatturaElettronicaBody/DatiPagamento/DettaglioPagamento/DataRiferimentoTerminiPagamento"
      ]
    },
    {
      "schema_id": "payment_terms_days",
      "selectors": [
        "//FatturaElettronicaBody/DatiPagamento/DettaglioPagamento/GiorniTerminiPagamento"
      ]
    },
    {
      "schema_id": "amount_total",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/ImportoTotaleDocumento"
      ]
    },
    {
      "schema_id": "currency_code",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/Divisa"
      ]
    },
    {
      "schema_id": "bollo_amount",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiBollo/ImportoBollo"
      ]
    },
    {
      "schema_id": "tipo_ritenuta",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiRitenuta[TipoRitenuta!='RT04']/TipoRitenuta"
      ]
    },
    {
      "schema_id": "ritenuta_amount",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiRitenuta[TipoRitenuta!='RT04']/ImportoRitenuta"
      ]
    },
    {
      "schema_id": "ritenuta_rate",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiRitenuta[TipoRitenuta!='RT04']/AliquotaRitenuta"
      ]
    },
    {
      "schema_id": "causale_pagameno",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiRitenuta[TipoRitenuta!='RT04']/CausalePagamento"
      ]
    },
    {
      "schema_id": "enasarco_amount",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiRitenuta[TipoRitenuta='RT04']/ImportoRitenuta"
      ]
    },
    {
      "fields": [
        {
          "schema_id": "item_description",
          "selectors": [
            "Descrizione"
          ]
        },
        {
          "schema_id": "item_quantity",
          "selectors": [
            "Quantita"
          ]
        },
        {
          "schema_id": "item_amount_base",
          "selectors": [
            "PrezzoUnitario"
          ]
        },
        {
          "schema_id": "item_total_base",
          "selectors": [
            "PrezzoTotale"
          ]
        },
        {
          "schema_id": "item_rate",
          "selectors": [
            "AliquotaIVA"
          ]
        },
        {
          "schema_id": "item_vat_code",
          "selectors": [
            "Natura"
          ]
        },
        {
          "schema_id": "item_code",
          "selectors": [
            "CodiceArticolo/CodiceValore"
          ]
        }
      ],
      "schema_id": "line_items",
      "selectors": [
        "FatturaElettronicaBody/DatiBeniServizi/DettaglioLinee"
      ]
    },
    {
      "fields": [
        {
          "schema_id": "item_tipo_cassa",
          "selectors": [
            "TipoCassa"
          ]
        },
        {
          "schema_id": "item_contributo_cassa",
          "selectors": [
            "ImportoContributoCassa"
          ]
        },
        {
          "schema_id": "item_aliquoata_iva_cassa",
          "selectors": [
            "AliquotaIVA"
          ]
        },
        {
          "schema_id": "item_cassa_alcassa",
          "selectors": [
            "AlCassa"
          ]
        },
        {
          "schema_id": "item_cassa_tax_code",
          "selectors": [
            "Natura"
          ]
        },
        {
          "schema_id": "item_discount_amount",
          "selectors": [
            "ScontoMaggiorazione[Tipo='SC']/Importo"
          ]
        },
        {
          "schema_id": "item_discount_rate",
          "selectors": [
            "ScontoMaggiorazione[Tipo='SC']/Percentuale"
          ]
        }
      ],
      "schema_id": "cassa_items",
      "selectors": [
        "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/DatiCassaPrevidenziale"
      ]
    },
    {
      "fields": [
        {
          "schema_id": "tax_detail_rate",
          "selectors": [
            "AliquotaIVA"
          ]
        },
        {
          "schema_id": "tax_detail_tax",
          "selectors": [
            "Imposta"
          ]
        },
        {
          "schema_id": "tax_detail_base",
          "selectors": [
            "ImponibileImporto"
          ]
        },
        {
          "schema_id": "tax_detail_code",
          "selectors": [
            "Natura"
          ]
        }
      ],
      "schema_id": "tax_details",
      "selectors": [
        "FatturaElettronicaBody/DatiBeniServizi/DatiRiepilogo"
      ]
    }
  ],
  "trigger_condition": {
    "selector": "FatturaElettronicaBody/DatiGenerali/DatiGeneraliDocumento/Numero",
    "file_type": "xml"
  }
}
```
