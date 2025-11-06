import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function CheckoutForm() {
  return (
    <form className="space-y-8 md:space-y-[53px]">
      <FieldSet>
        <FieldLegend>Billing Details</FieldLegend>
        <FieldGroup className="lg:grid lg:grid-cols-2 lg:gap-x-4">
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input placeholder="name" />
          </Field>
          <Field>
            <FieldLabel>Email Address</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>Phone Number</FieldLabel>
            <Input />
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Shipping Info</FieldLegend>
        <FieldGroup className="lg:grid lg:grid-cols-2 lg:gap-x-4">
          <Field className="col-span-2">
            <FieldLabel>Your Address</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>ZIP Code</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>City</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>Country</FieldLabel>
            <Input />
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Payment Details</FieldLegend>
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
          <FieldLabel className="self-start">Payment Method</FieldLabel>
          <FieldGroup>
            <RadioGroup>
              <FieldLabel>
                <Field orientation={"horizontal"}>
                  <RadioGroupItem value="e-money" />
                  <FieldContent>
                    <FieldTitle>e-Money</FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
              <FieldLabel>
                <Field orientation={"horizontal"}>
                  <RadioGroupItem value="cash" />
                  <FieldContent>
                    <FieldTitle>Cash on Delivery</FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldGroup>
        </div>
        <FieldGroup className="lg:grid lg:grid-cols-2 lg:gap-x-4">
          <Field>
            <FieldLabel>e-Money Number</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>e-Money PIN</FieldLabel>
            <Input />
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  );
}
