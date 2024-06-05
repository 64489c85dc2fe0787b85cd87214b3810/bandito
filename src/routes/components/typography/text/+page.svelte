<script>
  import { Text } from '$lib';
</script>

<h2>Numeric</h2>
<Text numeric>100.000,00</Text>

<h2>break word</h2>
<Text variant="bodyLg" as="p" breakWord id="kek">
  Shopify POS is the easiest way to sell your products in person. Available for iPad, iPhone, and
  Android.
</Text>

<h1>Heading</h1>
<Text variant="heading3xl" as="h2">Online store dashboard</Text>
<Text variant="heading2xl" as="h3">Online store dashboard</Text>
<Text variant="headingXl" as="h4">Online store dashboard</Text>
<Text variant="headingLg" as="h5">Online store dashboard</Text>
<Text variant="headingMd" as="h6">Online store dashboard</Text>
<Text variant="headingSm" as="h6">Online store dashboard</Text>
<Text variant="headingXs" as="h6">Online store dashboard</Text>

<Text variant="bodyLg" as="p">
  Shopify POS is the easiest way to sell your products in person. Available for iPad, iPhone, and
  Android.
</Text>
<Text variant="bodyMd" as="p">
  Shopify POS is the easiest way to sell your products in person. Available for iPad, iPhone, and
  Android.
</Text>
<Text variant="bodySm" as="p">
  Shopify POS is the easiest way to sell your products in person. Available for iPad, iPhone, and
  Android.
</Text>
<Text variant="bodyXs" as="p">
  Shopify POS is the easiest way to sell your products in person. Available for iPad, iPhone, and
  Android.
</Text>

<Text variant="bodyLg" as="p" alignment="start">
  Manage your Shopify store on-the-go with real-time notifications, access to your dashboard, and
  order management, all from your smartphone.
</Text>
<Text variant="bodyLg" as="p" alignment="center">
  Manage your Shopify store on-the-go with real-time notifications, access to your dashboard, and
  order management, all from your smartphone.
</Text>
<Text variant="bodyLg" as="p" alignment="end">
  Manage your Shopify store on-the-go with real-time notifications, access to your dashboard, and
  order management, all from your smartphone.
</Text>
<Text variant="bodyLg" as="p" alignment="justify">
  Manage your Shopify store on-the-go with real-time notifications, access to your dashboard, and
  order management, all from your smartphone.
</Text>

<Text as="p" fontWeight="bold">Sales this year</Text>
<Text as="p" fontWeight="semibold">Sales this year</Text>
<Text as="p" fontWeight="medium">Sales this year</Text>
<Text as="p" fontWeight="regular">Sales this year</Text>

<Text as="p" tone="subdued">
  Use to de-emphasize a piece of text that is less important to merchants than other nearby text.
  May also be used to indicate when normal content is absent, for example, “No supplier listed”.
  Don’t use only for aesthetic effect.
</Text>
<Text as="p" tone="success">
  Use in combination with a symbol showing an increasing value to indicate an upward trend.
</Text>
<Text as="p" tone="caution">
  Use to denote something that needs attention, or that merchants need to take action on.
</Text>
<Text as="p" tone="critical">
  Use in combination with a symbol showing a decreasing value to indicate a downward trend.
</Text>

<Text as="p" variant="heading2xl" tone="caution">
  <Text as="span">This is a 2xl heading</Text>
  <br />
  <Text as="span">This is also a 2xl heading</Text>
</Text>

<Text as="p" textDecorationLine="line-through">$100.00</Text>
